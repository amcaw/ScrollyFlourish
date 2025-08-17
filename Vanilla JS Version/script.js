import { flourishID, stepsData } from './data.js';

let activeStepIndex = 0;
let observer;
let scrollyContainer;
let foreground;
let flourishIframe;

function updateFlourish() {
    const url = `https://flo.uri.sh/story/${flourishID}/embed#slide-${activeStepIndex}`;
    flourishIframe.src = url;
}

function createSteps() {
    foreground.innerHTML = '';
    
    stepsData.forEach((stepData, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step';
        stepElement.setAttribute('data-step', index);
        
        const stepContent = document.createElement('div');
        stepContent.className = 'step-content';
        
        const textElement = document.createElement('p');
        textElement.innerHTML = stepData.text;
        
        stepContent.appendChild(textElement);
        stepElement.appendChild(stepContent);
        foreground.appendChild(stepElement);
    });
}

function initializeIntersectionObserver() {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const { target, isIntersecting } = entry;
            const stepElements = Array.from(scrollyContainer.querySelectorAll('.step'));
            const index = stepElements.indexOf(target);
            
            if (isIntersecting && index !== -1) {
                activeStepIndex = index;
                updateFlourish();
            }
        });
    }, { threshold: 0.6 });

    const stepElements = scrollyContainer.querySelectorAll('.step');
    stepElements.forEach(el => observer.observe(el));
}

function init() {
    scrollyContainer = document.getElementById('scrolly-container');
    foreground = document.getElementById('foreground');
    flourishIframe = document.getElementById('flourish-iframe');
    
    createSteps();
    updateFlourish();
    initializeIntersectionObserver();
}

window.addEventListener('beforeunload', () => {
    if (observer) {
        observer.disconnect();
    }
});

document.addEventListener('DOMContentLoaded', init);