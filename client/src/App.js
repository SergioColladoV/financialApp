// IMPORT REACT
import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalStyle from "./theme/globalStyle";

// IMPORT COMPONENTS
import Header from "./components/ui/header/header";
import Expenses from "./components/pages/expenses/expenses";
import Incomes from "./components/pages/incomes/incomes";

// IMPORT STYLED
import styled from "styled-components";

// STYLED
const Main = styled.div`
    width: 100%;
    height: calc(100% - 4em);
    margin-top: 4em;
    padding: 1em;
    padding-right: 1em;
    padding-left: 1em;

    @media (min-width: 576px) {
        padding-left: 2em;
        padding-right: 2em;
    }

    @media (min-width: 768px) {
        padding-left: 4em;
        padding-right: 4em;
    }

    @media (min-width: 992px) {
        padding-left: 6em;
        padding-right: 6em;
    }

    @media (min-width: 1200px) {
        padding-left: 8em;
        padding-right: 8em;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main className="container">
                <Switch>
                    <Route exact path="/" />
                    <Route path="/expenses" render={() => <Expenses />} />
                    <Route path="/incomes" render={() => <Incomes />} />
                </Switch>
            </Main>
        </>
    );
}

export default App;
