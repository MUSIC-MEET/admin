import { css } from "@emotion/react";
import Menu from "components/Menu/Menu";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Music from "components/pages/Music/Index";
import Main from "components/pages/Main/Index";
import User from "components/pages/User/Index";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
            useErrorBoundary: true,
            retry: 0,
            refetchOnWindowFocus: false,

        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App" css={style}>
                <Menu className="menu" />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/users/*" element={<User />} />
                        <Route path="/musics/*" element={<Music />} />
                    </Routes>
                </div>
            </div>
        </QueryClientProvider>

    );
}

const style = css`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    .menu {
        min-width: 16rem;
        /* height: 100%; */
    
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