<script>
	import axios from 'axios';
	import Comments from '../lib/comments.svelte';
	import Error from '../lib/error.svelte';
	import Success from '../lib/success.svelte';

	export let data;
	let commentsData = data.data;

	export let comment = '';
	export let name = '';
	let comments = [...commentsData];

	let visible = false;
	let successVisible = false;

	function onAdd() {
		if (comment === '' || name === '' || comment.length > 30 || name.length > 21) {
			visible = true;
		} else if (comment !== '' && name !== '' && comment.length <= 30 && name.length <= 21) {
			comments = [...comments, { text: comment, name: name, id: comments.length + 1 }];
			visible = false;
			successVisible = true;

			async function post() {
				await axios.post('https://644f97dbba9f39c6ab675407.mockapi.io/comments', {
					text: comment,
					name: name
				});
			}
			post();

			comment = '';
			name = '';
		}
	}
</script>

{#if visible}
	<Error on:close={() => (visible = false)} />
{/if}
{#if successVisible}
	<Success on:close={() => (successVisible = false)} />
{/if}

<main>
	<h2 class="text-center mt-7">
		Here you can leave your comment<br /> and everyone will see it! ✨
	</h2>

	<form on:submit|preventDefault class="flex items-center justify-center mt-10 flex-col">
		<input
			bind:value={name}
			type="text"
			class="input w-[300px]"
			placeholder="Write your name!"
			maxlength="21"
		/>
		<input
			bind:value={comment}
			type="text"
			class="input w-[300px] mt-5"
			placeholder="Write your comment!"
			maxlength="30"
		/>

		<button on:click={onAdd} type="submit" class="btn variant-filled mt-7">Add comment</button>
	</form>

	<h3 class="text-center mt-[50px]">Other's comments</h3>

	<div class="flex items-center justify-center mt-[50px] flex-wrap">
		{#if data !== []}
			{#each comments as comment}
				<Comments id={comment.id} text={comment.text} author={comment.name} />
			{/each}
		{/if}
	</div>
</main>
