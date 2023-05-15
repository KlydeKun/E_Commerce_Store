import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 650px) {
            ${props}
        }
    `
}

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 820px) {
            ${props}
        }
    `
}

export const laptop = (props) => {
    return css`
        @media only screen and (max-width: 1025px) {
            ${props}
        }
    `
}