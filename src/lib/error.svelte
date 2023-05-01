<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
</script>

<aside
	class="alert variant-filled-error absolute w-[300px] top-5 left-5"
	transition:fade|local={{ duration: 300 }}
>
	<!-- Message -->
	<div class="alert-message">
		<h3>Error</h3>
		<p>
			Fill in all the fields and the length of the name field should not exceed 21 characters and
			the length of the comment 30
		</p>
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
