module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			width: {
				'fit-content': 'fit-content'
			},
			height: {
				'fit-content': 'fit-content'
			},
			"min-width" : {
				6: "1.5rem"
			},
			cursor: {
				'grab': 'grab'
			}
		}
	},
	plugins: []
};
