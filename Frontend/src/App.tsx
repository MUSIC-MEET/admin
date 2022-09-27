import { css } from "@emotion/react";
import Menu from "components/Menu/Menu";
import React from "react";

function App() {
    return (
        <div className="App" css={style}>
            <Menu className="menu" />
        </div>
    );
}

const style = css`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: row;
    .menu {
        min-width: 16rem;
        
    }
`;

export default App;