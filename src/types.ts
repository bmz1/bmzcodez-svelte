export interface Post {
	slug: string
	title: string
	date: string
	isIndexFile: boolean
	preview: {
		html: string
		text: string
	}
	metadata: {
		date: string
		preview: string
	}
	default?: any
	readingTime: string
	next?: Post
	previous?: Post
	[key: string]: any
}
