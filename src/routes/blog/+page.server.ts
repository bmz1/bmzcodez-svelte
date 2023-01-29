import { posts } from '$lib/data/posts'
import { paginate } from '$lib/util'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const prerender = true

export const load: PageServerLoad = async () => {
	// if page doesn't exist, 404
	if (posts.length === 0) {
		throw error(404, 'Page not found')
	}

	return {
		posts
	}
}
