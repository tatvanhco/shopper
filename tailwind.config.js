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
                Gray500: '#525252',
                btnHover: '#9e9e9e',
                f5f5f5: '#f5f5f5',
                color767676: '#767676',
                e5e5e5: '#e5e5e5',
                Gray400: '#909090',
                hihi: 'red',
            },
        },
        height: {
            13: '3.25rem',
            15: '3.75rem',
            24: '6rem',
            100: '25rem',
            112: '28rem',
            120: '30rem',
            128: '32rem',
            144: '36rem',
        },
    },
    plugins: [],
};
