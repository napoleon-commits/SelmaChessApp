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
				tooltip: 'Send An Email',
				aria: 'Email',
			},
			{
				icon: 'mdi-github-face',
				href: 'https://github.com/napoleon-commits/SelmaChessApp/tree/cdn-dev',
				tooltip: 'View GitHub Repository',
				aria: 'GitHub'
			},
		],
		footerText: [
			`
				"${
					"A book cannot by itself teach how to play. " +
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
		header: 'An Introduction to Chess',
		body: `
			Successfully lead an empire! Imagine soldiers on foot leading the charge.
			Imagine the mounted troops on horseback.
			Imagine the King with the Queen at its side.
			In many battles, when the King dies or is captured the battle ends.
			And so it is in the game of chess.
		`,
	},
})
