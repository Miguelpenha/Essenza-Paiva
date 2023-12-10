import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 2em 2em;
    background-color: ${props => props.theme.secondary};

    @media screen and (min-width: 900px) {
        padding: 2em 20em;
    }
`

export const Title = styled.h3`
    font-weight: 500;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.secondaryBackground};
`

export const Description = styled.h2`
    font-size: 1em;
    margin-top: 1em;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.secondaryBackground};
`

export const Button = styled.a`
    width: 12em;
    padding: 1.2em;
    font-size: 1em;
    margin-top: 2em;
    font-weight: bold;
    text-align: center;
    align-self: center;
    border-radius: 30px;
    text-decoration: none;
    transform: scale(0.9);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.theme.primary};

    :hover {
        transform: scale(1);
    }
`
