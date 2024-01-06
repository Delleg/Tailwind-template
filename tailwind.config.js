/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html', './src/**/*.{html,js}'],
	theme: {
		extend: {
			zIndex: {
				100: '100',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'bright-blue': '#1864AB',
				'dark-blue': '#0F1322',
				'paper-white': '#E8E8E8',
			},
		},

		fontFamily: {
			'source-sans-3': ['"Source Sans 3"', 'serif'],
			arimo: ['Arimo', 'serif'],
		},
	},
	plugins: [],
};
