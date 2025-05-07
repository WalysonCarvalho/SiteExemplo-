import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.COLOR_BLACK};
        color:${({ theme }) => theme.COLORS.COLOR_WHITE};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    transition: transform 0.3s ease-out;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
