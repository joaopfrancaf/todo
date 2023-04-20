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

export const DivContainer = styled('div', {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',

    marginTop: '4rem',
})

export const DivContainer2 = styled('div', {
    //backgroundColor: '$--blue--dark',
    width: '46.5rem',
})

export const DivListInfo = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',

    div: {

    }
})

export const DivListCriadas = styled('div', {
    display: 'flex',
    gap: 10,
    color: '$--blue',
    fontWeight: '700',

    div: {
        textAlign: 'center',
        padding: '0 1rem 0 1rem',
        color: '$--gray-200',
        backgroundColor: '$--gray-400',
        borderRadius: '5rem',
        fontWeight: '400'
    }
})

export const DivListConcluidas = styled('div', {
    display: 'flex',
    gap: 10,
    color: '$--purple',
    fontWeight: '700',

    div: {
        textAlign: 'center',
        padding: '0 1rem 0 1rem',
        color: '$--gray-200',
        backgroundColor: '$--gray-400',
        borderRadius: '5rem',
        fontWeight: '400'
    }
})

export const DivList = styled('div', {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
})