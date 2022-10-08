/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                mainColor: '#1f1f1f',
                secondColor: '#ff6f61',
                thirdColor: '#303030',
                footerColor: '#bababa',
                footerColor2: '#a6a6a6',
                btnGray500: '#525252',
                btnHover: '#9e9e9e',
                f5f5f5: '#f5f5f5',
                color767676: '#767676',
                e5e5e5: '#e5e5e5'
            },
        },
        height: {
            128: '32rem',
        },
    },
    plugins: [],
};
