import type { Post } from 'src/types'

/**
 * Paginates an array of data.
 *
 * @param {Post[]} data
 * @param {{ page?: number, limit: number }} args
 * @returns
 */
export function paginate(data: Post[], { page = 1, limit = 1 } = {}): Post[] {
	if (limit) {
		return data.slice((page - 1) * limit, page * limit)
	}

	return data
}
