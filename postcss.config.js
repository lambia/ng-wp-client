// postcss.config.js
module.exports = {
    // plugins: {
    //     tailwindcss: {},
    //     autoprefixer: {},
    // }
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        // npm install postcss-nesting
        // require('tailwindcss/nesting')(require('postcss-nesting')),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}