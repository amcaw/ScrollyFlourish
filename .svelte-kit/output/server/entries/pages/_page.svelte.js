import "clsx";
import { y as current_component, z as ensure_array_like, v as pop, t as push } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function Scrolly($$payload, $$props) {
  push();
  let activeStepIndex = 0;
  let flourishURL = "https://flo.uri.sh/story/3279459/embed";
  let stepsData = [
    { "text": "First <mark>step</mark> text" },
    { "text": "Second step text" },
    { "text": "Third step text" },
    { "text": "Fourth step text" }
  ];
  onDestroy(() => {
  });
  const each_array = ensure_array_like(stepsData);
  $$payload.out.push(`<section class="section-container svelte-1wx78sg"><div class="foreground svelte-1wx78sg"><!--[-->`);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let { text } = each_array[index];
    $$payload.out.push(`<div class="step svelte-1wx78sg"${attr("data-step", index)}><div class="step-content svelte-1wx78sg"><p class="svelte-1wx78sg">${html(text)}</p></div></div>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="sticky-background svelte-1wx78sg"><iframe${attr("src", `${flourishURL}#slide-${activeStepIndex}`)} title="Interactive or visual content" class="flourish-embed svelte-1wx78sg" frameborder="0" scrolling="no" style="width:100%;height:100vh;"></iframe></div></section>`);
  pop();
}
function _page($$payload) {
  $$payload.out.push(`<h1>Welcome to SvelteKit</h1> <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> `);
  Scrolly($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
