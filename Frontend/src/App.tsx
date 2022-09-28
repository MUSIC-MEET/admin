import { css } from "@emotion/react";
import Title from "components/common/Title";
import Menu from "components/Menu/Menu";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Music from "components/pages/Music/Index";

function App() {
    return (
        <div className="App" css={style}>
            <Menu className="menu" />
            <article className="content">
                <Routes>
                    <Route path="/music/*" element={<Music />} />
                </Routes>
            </article>
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

    .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }
`;

export default App;