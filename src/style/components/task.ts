import { styled } from "../stitches.config";

export const StyledTaskContainer = styled("div", {
    backgroundColor: '$--gray-400',
    display: 'flex',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingBottom: '1rem',

    border:' 1px solid #333333',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
    borderRadius: '8px',

    span: {
        marginTop: '1rem',
        marginLeft: '1rem',
        color: '$--gray-100',
        fontSize: '1rem',
        fontWeight: '300',
    },

    button: {
        background: 'none',
        color: 'inherit',
        border: 'none',
        padding: 0,
        cursor: 'pointer'
    },

    input: {
        cursor: 'pointer',
        marginTop: '1.2rem',
        width: '1.3rem',
        height: '1.3rem',
        backgroundColor: '$--gray-400',
        borderRadius: '50%',
        verticalAlign: 'middle',
        border: '2px solid $--blue',
        appearance: 'none',
        '-webkit-appearance': 'none',
        outline: 'none',

        '&:checked': {
            backgroundColor: '$--purple-dark',
            border: '2px solid $--purple-dark',
        }
    }
})