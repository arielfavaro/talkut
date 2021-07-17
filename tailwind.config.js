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
                    DEFAULT: '#111320',
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
