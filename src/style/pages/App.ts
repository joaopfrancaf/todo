import { styled } from '../stitches.config'

export const DivStyledHeader = styled('div', {
    backgroundColor: '$--gray-700',
    height: '12.5rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: "-1.6rem"
})

export const DivInputStyled = styled('div', {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',

    input: {
        height: '3.188rem',
        width: '39.875rem',
        borderStyle: 'none',
        borderRadius: 8,
        backgroundColor: '$--gray-500',
        color: '$--gray-300',
        fontSize: '1rem',
        padding: '1rem'
    },

    button: {
        height: '3.25rem',
        width: '5.625rem',
        cursor: 'pointer',
        backgroundColor: '$--blue--dark',
        borderStyle: 'none',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        color: '$--gray-100',
        fontWeight: 700,
    },
})