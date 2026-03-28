<script lang="ts">
	import Scrolly from '$lib/Scrolly.svelte';

	const stories = [
		{ id: 2266911, label: 'Line chart' },
		{ id: 3194510, label: 'Carte' },
		{ id: 3279512, label: 'Fondu image' },
		{ id: 3279483, label: 'Waffle chart' },
		{ id: 3279480, label: 'Dot plot / Data explorer' },
		{ id: 3279476, label: 'Avant / Après' },
		{ id: 3279474, label: 'Spotlight' },
		{ id: 3279466, label: '3D Globe' },
		{ id: 3279459, label: 'Terrain de foot' },
	];

	let activeStory = $state(stories[0]);
</script>

<div class="article">
	<h2>Exemples de scrollytelling avec Flourish</h2>
	<p>Sélectionnez un type de visualisation pour le voir en action dans le composant scrollytelling.</p>
</div>

<nav class="story-picker">
	{#each stories as story}
		<button
			class:active={activeStory.id === story.id}
			onclick={() => { activeStory = story; }}
		>
			{story.label}
		</button>
	{/each}
</nav>

{#key activeStory.id}
	<Scrolly flourishID={activeStory.id} />
{/key}

<style>
	.story-picker {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		padding: 1rem 1rem 0;
		max-width: 800px;
		margin: 0 auto;
	}

	.story-picker button {
		background: none;
		border: 1px solid var(--color-muted);
		color: var(--color-text);
		font-family: var(--font-body);
		font-size: 0.85rem;
		font-weight: 500;
		padding: 0.4rem 0.8rem;
		border-radius: var(--radius);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.story-picker button:hover {
		border-color: var(--color-accent);
		color: var(--color-accent);
	}

	.story-picker button.active {
		background: var(--color-accent);
		border-color: var(--color-accent);
		color: #000;
		font-weight: 700;
	}
</style>
