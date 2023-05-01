<script>
	export let id
	export let text
	export let author
</script>

<div class="flex items-center justify-between">
	<blockquote class="mt-[25px] ml-[25px]">
		<h3>{id}. {author}</h3>
		<h6>{text}</h6>
	</blockquote>
</div>
