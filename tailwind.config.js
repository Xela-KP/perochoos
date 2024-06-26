/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const plugins = [];
export const theme = {
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
    },
    colors: {
        esther: 'rgb(var(--color-esther) / <alpha-value>)',
        maximus: 'rgb(var(--color-maximus) / <alpha-value>)',
        linx: 'rgb(var(--color-linx) / <alpha-value>)',
        primary: '#7e5bef',
        secondary: '#ffffff',
        black: '#000000',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
    },
    fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
    },
    extend: {
        spacing: {
            128: '32rem',
            144: '36rem',
        },
        borderRadius: {
            '4xl': '2rem',
        },
    },
};
