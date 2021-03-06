import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        outline: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    body{
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
       font-size: 1rem;
       background-color: #F5F5F5;
       color: #424242;
    }
`;

export default GlobalStyles;
