<div class="flex flex-col flex-grow">
	<header class="pt-4">
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">About</h1>
	</header>

	<section class="mt-4">
		<p class="text-3xl font-bold tracking-tight sm:text-3xl">
			Who Am I?
		</p>
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Click here</a>
		<br />
		<p>
			Source code of this blog can be found on my <a
				href="https://github.com/bmz1/bmzcodez-svelte"
				target="_blank"
				rel="noreferrer">Github</a
			>
		</p>
	</section>
</div>

<style>
	a {
		@apply flex items-center gap-2 font-medium text-zinc-700;
	}

	:global(.dark) a {
		@apply text-zinc-300;
	}
</style>
