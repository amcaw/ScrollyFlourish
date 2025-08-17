<script lang="ts">
import { onMount, onDestroy } from 'svelte';

  let activeStepIndex = 0;
  let observer: IntersectionObserver;
  let scrollyRef: HTMLElement;
  let flourishID = 3279466; 
	
  let stepsData = [
    { "text": "First <mark>step</mark> text" },
    { "text": "Second step text" },
    { "text": "Third step text" },
	{ "text": "Fourth step text" },
  ];

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const { target, isIntersecting } = entry;
        const index = Array.from(scrollyRef.querySelectorAll('.step')).indexOf(target);
        if (isIntersecting) {
          activeStepIndex = index;
        }
      });
    }, { threshold: 0.6 });

    const stepElements = scrollyRef.querySelectorAll('.step');
    stepElements.forEach(el => observer.observe(el));
  });

  onDestroy(() => {
    observer?.disconnect();
  });
</script>



<section bind:this={scrollyRef} class="section-container">

	<div class="foreground">
    {#each stepsData as { text }, index}
      <div class="step" data-step={index}>
        <div class="step-content">
          <p>{@html text}</p> 
        </div>
      </div>
    {/each}
  </div>
	
  <div class="sticky-background">
      <iframe src={`https://flo.uri.sh/story/${flourishID}/embed#slide-${activeStepIndex}`} title="Interactive or visual content" class="flourish-embed" frameborder="0" scrolling="no" style="width:100%;height:100vh;pointer-events:none;"></iframe>
  </div>

</section>



<style>
	* {
		box-sizing: border-box;
	}
	.section-container {
    margin-top: 1em;
    text-align: center;
    transition: background 100ms;
    display: flex;
    flex-direction: row; 
		
  }

  .sticky-background {
    position: sticky;
    top: 0;
    height: 100vh;
    flex: 0 1 60%;
    overflow: hidden;
    z-index: 1;
  }

  .foreground {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 1 40%;
  }

  .step {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
    z-index: 2;
    width: 100%;
  }

  .step-content {
    background-color: rgba(245, 245, 245, 0.8);
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    color: black;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 10;
    font-size: 1rem;
    text-align: left;
    width: 100%; 
    max-width: 500px; 
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    .section-container {
      flex-direction: column-reverse;
    }
    .sticky-background, .foreground {
      width: 100%;
    }
    .foreground {
      margin-top: -80vh;
    }
  }
</style>