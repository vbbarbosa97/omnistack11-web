import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,400&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased;
    }

    input, button, textarea{
        font: 400 14px 'Roboto', sans-serif;
    }

    button{
        cursor: pointer;    
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }
    
    form input{
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 4px;
        padding: 0 24px;
    }

    form textarea{
        width: 100%;
        resize: vertical;
        min-height: 140px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 4px;
        padding: 16px 24px;
        line-height: 24px;
        margin-top: 8px;
    }

`;


