// IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";

// IMPORT STYLED COPONENTS
import styled from "styled-components";

// STYLED
const Wrapper = styled.div`
    width: 100%;
    height: 4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1a237e;
    padding: 0 1em;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    & p {
        color: #f50057;
        font-size: 1.5em;
        font-weight: bold;
    }
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;

    & li {
        margin-left: 1em;
    }
`;

const Header = () => {
    return (
        <>
            <Wrapper>
                <Link to="/">
                    <p>finApp</p>
                </Link>
                <nav>
                    <Menu>
                        <Link to="/incomes">
                            <li>Incomes</li>
                        </Link>
                        <Link to="/expenses">
                            <li>Expenses</li>
                        </Link>
                        <li>Settings</li>
                    </Menu>
                </nav>
            </Wrapper>
        </>
    );
};

export default Header;
