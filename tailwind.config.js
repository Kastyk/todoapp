module.exports = {
	prefix: '',
	purge: {
		content: ['./src/**/*.{html,ts}'],
	},
	darkMode: 'class',
	theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
		extend: {
			colors: {
				primary: '#0d7bba',
				secondary: '#6b7280',
				light: {
          primary: '#ffffff',
          secondary: '#fcfcfc'
        },
				dark: '#000000',
				gray: {
					primary: '#e1dfdf',
					secondary: '#c4c3c3',
          accent: '#42444d',
				},
			},
      screens: {
        '3xl': '1900px'
      },
			fontFamily: {
				todoapp: ['-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto', 'sans-serif'],
        home: ['Montserrat', 'sans-serif']
			},
			fill: (theme) => ({
				primary: theme('colors.primary'),
				secondary: theme('colors.secondary'),
			}),
		},
	},
	variants: {
		extend: {
			fill: ['hover'],
		},
	},
	plugins: [],
};
