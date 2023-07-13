/** @type {import('tailwindcss').Config} */
module.exports = {
    tailwindConfig: "./tailwind.config.js",
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
                sans: ["ui-sans-serif", "system-ui"],
                serif: ["ui-serif", "Georgia"],
                mono: ["ui-monospace", "SFMono-Regular"],
            },
            padding:{
                '1/2': '50%',
                '1/8': '12.5%'
            },
            margin:{
                '1/2': '50%'
            },
            height:{
                '1/5': "20%",
                '1/8': '12.5%',
                '7/8': '87.5%'
            },
                
            
        }
    },
    plugins: [],
};
