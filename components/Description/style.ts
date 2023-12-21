import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    font-size: 1em;
    padding: 4em 2em;
    font-weight: bold;
    line-height: 25px;
    text-align: center;
    background-color: ${props => props.theme.secondaryBackground};

    div {
        max-width: 40em;
        align-self: center;
    }

    span {
        color: ${props => props.theme.secondaryColor};
    }
`