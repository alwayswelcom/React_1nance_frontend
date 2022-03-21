module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {

        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(77.03% 77.03% at 28.58% 76.66%, var(--tw-gradient-stops))',
            },
            zIndex: {
                '1000': '1000',
                '10000': '10000',
                '100000': '100000',
            }
        },
    },
    plugins: [],
}