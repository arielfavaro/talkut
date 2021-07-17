module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#ac5bf7',
                },
                background: {
                    DEFAULT: '#D9E6F6',
                    secondary: '#F1F9FE',
                    active: '#BBCDE8',
                    dark: {
                        DEFAULT: '#111320',
                        secondary: '#282e54',
                    },
                },
            },
        },
    },
    variants: {
        extend: {
            scale: ['group-hover'],
        },
    },
    plugins: [],
}
