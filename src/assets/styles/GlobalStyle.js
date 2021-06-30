import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    html {
        box-sizing: border-box;
    }
    body {
        font-family: 'Montserrat', sans-serif;
    }
    *, *::after, *::before {
        box-sizing: inherit;
    }
`;
