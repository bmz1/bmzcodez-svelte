<script>
	import { nickname } from '$lib/info'
	import PostsList from '$lib/components/PostsList.svelte'

	/** @type {import('./$types').PageData} */
	export let data

	// $: isFirstPage = false
	// $: hasNextPage = data.posts[data.posts.length - 1]?.previous
</script>

<svelte:head>
	<title>{nickname} | Posts</title>
	<meta name="description" content="All of my written content collected in one place" />
</svelte:head>

<div class="flex flex-col flex-grow">
	<header class="pt-4">
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
			I've increased the entropy of the universe by writing these
		</h1>
		<p class="mt-6">Not much, but it's honest work</p>
	</header>

	<div class="mt-16 sm:mt-20">
		<PostsList posts={data.posts} />
	</div>

	<!-- pagination -->
	<!-- <div class="flex items-center justify-between pt-16 pb-8">
		{#if !isFirstPage}
			<a href={`/blog/${data.page - 1}`}>
				<ArrowLeftIcon class="w-4 h-4" />
				Previous
			</a>
		{:else}
			<div />
		{/if}

		{#if hasNextPage}
			<a href={`/blog/${data.page + 1}`} data-sveltekit-preload-data
				>Next
				<ArrowRightIcon class="w-4 h-4" />
			</a>
		{/if}
	</div> -->
</div>

<style>
	a {
		@apply flex items-center gap-2 font-medium text-zinc-700;
	}

	:global(.dark) a {
		@apply text-zinc-300;
	}
</style>
