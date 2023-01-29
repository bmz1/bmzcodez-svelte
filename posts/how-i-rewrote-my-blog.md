---
title: 'How I rewrote my blog'
slug: 'how-i-rewrote-my-blog'
image: 'how-i-rewrote-my-blog.jpg'
date: 2022-06-05
author: bmz
tags: ['nuxt', 'blog', 'ssg', 'vercel']
description: 'A quick overview how I rewrote my blog, and what technologies I chose.'
---

## TLDR
- Nuxt
- nuxt-content module to handle markdown
- TailwindCSS
- Vercel for hosting
---

OUTDATED

It took about a year or two to find the most elegant and fitting solution. I had tons of attempts, but most of it were trash. Actually, I didn't know what I wanted.

So, I've tried all the frameworks:
- Next
- Remix
- Gatsby
- Hugo
- Some others I don't remember

The goal was to have a framework with a well-known api (doesn't matter if it's React, Vue, Svelte, or other stuff) which can generate a static site from markdown files.

## Eureka
All of the above mentioned frameworks felt like too much for a simple blog, and it seemed that it requires a lot of time to have something that works well. 

Then I came across [Nuxt.js](https://nuxtjs.org/). Nuxt is basically the same like Next but for Vue instead of React. I thought this is going to be also an overkill for my good ol' markdown files. 

However, I was wrong. I was following Vue.js development, and I've read about Nuxt, but never tried it. 

![I was wrong](https://c.tenor.com/_mDYMNndgPkAAAAC/thorin-never-been-so-wrong.gif)

After carefully reading the docs, I immediately knew this is going to be the one.

It's so freakin simple like 1 times 1. In fact, I've spent more time with CSS, than configuring Nuxt.

## Choices

### Framework
So obviously to create a static site I chose Nuxt with the faboulus [`nuxt-content`](https://content.nuxtjs.org/) module.
I'm using React at my job, so I wanted something else, something fun, and Vue is fun.

### Style
I hate writing CSS, so Tailwind ftw!

### Cloud
I replaced Netlify with Vercel. It's so simple to use.


## Under the hood

I've looked under the hood in Nuxt, and I've found some very interesting libraries made by the Nuxt team.

- [H3](https://github.com/unjs/h3): H3 is a minimal h(ttp) framework built for high performance and portability
- [Nitro](https://github.com/unjs/nitro): Build and Deploy Universal JavaScript Servers
- [Unimport](https://github.com/unjs/unimport): Unified utils for auto importing APIs in modules

It's worth to have a look to [unjs](https://github.com/unjs) Github page.

---
Thus, after a long journey, this blog now can thrive. I just have to make some content.
