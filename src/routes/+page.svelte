<script>
	import SocialLinks from '$lib/components/SocialLinks.svelte'
	import { avatar, bio, keywords, nickname } from '$lib/info'
</script>

<svelte:head>
	<title>{nickname}</title>
	<meta
		name="description"
		content="Stay ahead of the game in web development with the latest tips, tricks, and insights on Node.js, React, and AWS. My blog provides in-depth tutorials, best practices, and expert advice to help you master the art of web development and build cutting-edge applications."
	/>
	<meta name="keywords" content={keywords.join(', ')} />
</svelte:head>

<div class="flex flex-col gap-12">
	<h1 class="text-4xl font-bold tracking-tight sm:text-5xl p-4">Hello there</h1>

	<div class="flex flex-col gap-8">
		<div class="flex justify-center order-2 col-span-2 gap-6 md:order-2">
			<SocialLinks />
		</div>
		<div class="flex justify-center order-1 md:order-1 md:col-span-2">
			<a href="/" class="inline-block rounded-full">
				<img
					src={avatar}
					alt={nickname}
					class="w-24 h-24 mx-auto rounded-full md:w-28 md:h-28 ring-2 ring-zinc-200 dark:ring-zinc-700"
				/>
			</a>
		</div>
		<p class="order-3 text-base text-zinc-600 dark:text-zinc-400">
			{bio}
		</p>
	</div>

	<div class="flex justify-center gap-4 flex-wrap pt-2">
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
			width="100"
			height="100"
			alt="typescript"
		/>
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
			width="100"
			height="100"
			alt="nodejs"
		/>
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
			width="100"
			height="100"
			alt="react"
		/>
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
			width="100"
			height="100"
			alt="kubernetes"
		/>
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
			width="100"
			height="100"
			alt="aws"
		/>
	</div>
</div>
