module.exports = {
	plugins: ['@vuepress/back-to-top'],
	title: 'Hello Vuepress module',
	description: 'Just playing around',
	themeConfig: {
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{
				text: 'Languages',
				items: [
					{ text: 'Chinese', link: '/language/chinese/' },
					{ text: 'Japanese', link: '/language/japanese/' }
				]
			},
			{ text: 'External', link: 'https://google.com' },
		],
		sidebar: [
			{
				title: 'Group 1',   // 必要的
				path: '/foo/',      // 可选的, 应该是一个绝对路径
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/install/',
					'/guide/',
					'/advance/',
				]
			},
			{
				title: 'Group 2',
				children: [
					'/other/'
				]
			}
		],
	}
}