import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body {
        width: 100%;
        height: 100vh;
        background: #f7f7fd;
        font-family: 'Montserrat', sans-serif;
        color: #090b2a;

        & #root {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    p, ul {
        padding: 0;
        margin: 0;
    }

    h1 {
        margin-bottom: 1rem;
    }

    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            color: inherit;
            text-decoration: none;
        }
    }

    input {
        border: 2px solid transparent;
        border-radius: 8px;
        font-size: 0.8em;
        padding: 8px 10px;
        font-family: Montserrat;
        color: #090b2a;

        &:focus {
            border: 2px solid #7E57C2;
            outline: 0;
        }

        &[type="submit"] {
            width: 100%;
            background-color: #651FFF;
            font-size: 1em;
            color: #FFF;
        }

        &[type="checkbox"] {
            border: 0
        }
    }

    .input-grp {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;

        & label {
            margin-bottom: 0.5em;
        }
    }

    .check-grp {
        display: flex;
        align-items: center;
        margin-bottom: 1em;

        & .check-container {
            position: relative;
            width: 20px;
            height: 20px;
            border: 3px solid #f50057;
            border-radius: 50%;

            & input {
                opacity: 0;
                width: 20px;
                height: 20px;
                cursor: pointer;

                &:checked {
                    ~ .check {
                        opacity: 1;
                    }
                }
            }

            .check {
                opacity: 0;
                content: "";
                position: absolute;
                display: block;
                width: 10px;
                height: 10px;
                left: 2px;
                top: 2px;
                background-color: #f50057;
                border-radius: 50px;
                pointer-events: none;
            }
        }

        & label {
            margin-left: 0.5em;
        }
    }
`;

export default GlobalStyle;
