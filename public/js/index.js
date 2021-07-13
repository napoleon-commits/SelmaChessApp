new Vue({
	el: '#app',
	vuetify: new Vuetify({
		theme: {dark: true,},
	}),
	data: {
		iconObjects: [
			{
				icon: 'mdi-email',
				href: 'mailto: selmachessapp@gmail.com',
				tooltip: 'Send An Email'
			},
			{
				icon: 'mdi-github-face',
				href: 'https://github.com/napoleon-commits/SelmaChessApp/tree/cdn-dev',
				tooltip: 'View GitHub Repository'
			},
		],
		footerText: [
			`
				"${
					"A book cannot by itself teach how to play" +
					"It can only serve as a guide, " +
					"and the rest must be learned by experience."
				}"
			`,
			`
				${
					new Date().getFullYear()
				} - a Byron J-Mil Hall production
			`,
		],
	},
})