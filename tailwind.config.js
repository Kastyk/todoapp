module.exports = {
	prefix: '',
	purge: {
		content: ['./src/**/*.{html,ts}'],
	},
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#4eb7f5',
				secondary: '8d8a86',
				light: '#ffffff',
				dark: '#000000',
				gray: {
					primary: '#e1dfdf',
					secondary: '#c4c3c3',
				},
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
