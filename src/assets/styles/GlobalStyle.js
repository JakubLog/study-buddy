import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    html {
        box-sizing: border-box;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        color: ${({ theme }) => theme.colors.text};
        height: 100vh;
        overflow-y: hidden;
    }
    *, *::after, *::before {
        box-sizing: inherit;
    }
    input, button, a {
        color: ${({ theme }) => theme.colors.text};
    }
`;
