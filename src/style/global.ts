import {globalCss} from "../style/stitches.config"

export const globaStyles = globalCss ({
    /* default css */
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        backgroundColor: '$--gray-600',
        '-webkit-font-smoothing' : 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Inter',
        fontWeight: 400,
    },

    
})