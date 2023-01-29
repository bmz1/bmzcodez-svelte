<div class="flex flex-col flex-grow">
	<header class="pt-4">
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Stack</h1>
	</header>

	<section class="mt-4">
		<p>
			This blog is powered by SvelteKit. I'v used Tailwind's spotlight theme for styles, and Vercel
			for hosting.
		</p>
		<br />
		<p>
			Source code can be found on <a
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
