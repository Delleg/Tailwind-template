/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html', './src/**/*.{html,js}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '600px',
				md: '728px',
				lg: '1440px',
				xl: '1496px',
				// '2xl': '1496px',
			},
		},
		extend: {
			zIndex: {
				100: '100',
			},
			colors: {
				Danger: 'hsl(0, 83%, 62%)',
				Primary: 'hsl(199, 87%, 61%)',
				Success: 'hsl(165, 80%, 43%)',
				Warning: 'hsl(38, 89%, 68%)',
				Info: 'hsl(184, 100%, 28%)',
				'Brand-1': 'hsl(27, 100%, 82%)',
				'Brand-2': 'hsl(26, 88%, 90%)',
				'Brand-3': 'hsl(18, 100%, 95%)',
				'Brand-4': 'hsl(23, 100%, 97%)',
				'Grey-900': 'hsl(0, 0%, 6%)',
				'Grey-700': 'hsl(0, 0%, 28%)',
				'Grey-400': 'hsl(0, 0%, 60%)',
				'Grey-100': 'hsl(0, 0%, 95%)',
			},
		},

		fontFamily: {
			Source_Sans_3: ['Source Sans 3', 'sans-serif'],
		},
	},
	plugins: [],
};
