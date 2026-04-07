<script lang="ts">
	import Scrolly from '$lib/Scrolly.svelte';

	let inputValue = $state('3279466');
	let flourishID = $state(3279466);

	function submit() {
		const parsed = parseInt(inputValue, 10);
		if (!isNaN(parsed)) {
			flourishID = parsed;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			submit();
		}
	}
</script>

<div class="demo-bar">
	<label for="flourish-id">Flourish story ID:</label>
	<input
		id="flourish-id"
		type="text"
		bind:value={inputValue}
		onkeydown={handleKeydown}
		placeholder="e.g. 3279466"
	/>
	<button onclick={submit}>Load</button>
</div>

{#key flourishID}
	<Scrolly {flourishID} />
{/key}

<style>
	.demo-bar {
		position: fixed;
		top: 1rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 100;
		background: rgba(255, 255, 255, 0.95);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
		border-radius: 8px;
		padding: 0.5rem 0.75rem;
		display: flex;
		gap: 0.5rem;
		align-items: center;
		font-size: 0.9rem;
	}

	.demo-bar input {
		padding: 0.25rem 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 0.9rem;
		width: 140px;
	}

	.demo-bar button {
		padding: 0.25rem 0.75rem;
		border: none;
		background: #333;
		color: white;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.9rem;
	}

	.demo-bar button:hover {
		background: #555;
	}
</style>
