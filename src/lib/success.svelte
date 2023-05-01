<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
</script>

<aside
	class="alert variant-filled-success absolute w-[300px] top-5 left-5"
	transition:fade|local={{ duration: 300 }}
>
	<!-- Message -->
	<div class="alert-message">
		<h3 class="text-white">Success</h3>
		<p class="text-white">Comment added successfully!</p>
	</div>
	<!-- Actions -->
	<div class="alert-actions">
		<button
			on:click={() => {
				dispatch('close');
			}}
			type="button"
			class="btn-icon variant-filled">Ok</button
		>
	</div>
</aside>
