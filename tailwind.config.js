const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: colors.white,
                gray: colors.slate,
                primary: colors.teal,
                secondary: colors.sky,
                success: colors.green,
                info: colors.purple,
                warning: colors.yellow,
                danger: colors.red,
                "vtd-primary": colors.teal, // Light mode Datepicker color
                "vtd-secondary": colors.slate, // Dark mode Datepicker color
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
