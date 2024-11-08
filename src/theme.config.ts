export const THEME_CONFIG: App.Locals['config'] = {
	/** blog title */
	title: '青丝为谁绾',
	/** your name */
	author: 'TheGadfly',
	/** website description */
	desc: '唤起一天明月，照我满怀冰雪，浩荡百川流。',
	/** your deployed domain */
	website: 'https://wdd-blog.vercel.app/',
	/** your locale */
	locale: 'en-us',
	/** theme style */
	themeStyle: 'light',
	/** your socials */
	socials: [
		{
			name: 'github',
			href: 'https://github.com/TheGadfly1996',
		},
		{
			name: 'rss',
			href: '/atom.xml',
		},
		{
			name: 'twitter',
			href: 'https://github.com/moeyua/astro-theme-typography',
		},
		{
			name: 'mastodon',
			href: 'https://github.com/moeyua/astro-theme-typography',
		},
	],
	/** your header info */
	header: {
		twitter: '@moeyua13',
	},
	/** your navigation links */
	navs: [
		{
			name: 'Posts',
			href: '/posts/page/1',
		},
		{
			name: 'Archive',
			href: '/archive',
		},
		{
			name: 'Categories',
			href: '/categories',
		},
		{
			name: 'About',
			href: '/about',
		},
	],
	/** your category name mapping, which the `path` will be shown in the url */
	category_map: [{ name: '胡适', path: 'hu-shi' }],
	/** your comment provider */
	comments: {
		disqus: {
			// please change this to your disqus shortname
			shortname: 'typography-astro',
		},
		// giscus: {
		//   repo: 'moeyua/astro-theme-typography',
		//   repoId: 'R_kgDOKy9HOQ',
		//   category: 'General',
		//   categoryId: 'DIC_kwDOKy9HOc4CegmW',
		//   mapping: 'title',
		//   strict: '0',
		//   reactionsEnabled: '1',
		//   emitMetadata: '1',
		//   inputPosition: 'top',
		//   theme: 'light',
		//   lang: 'zh-CN',
		//   loading: 'lazy',
		// },
		// twikoo: {
		//   envId: "https://twikoo-tau-flame.vercel.app",
		// }
	},
}
