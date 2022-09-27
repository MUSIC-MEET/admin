import { css } from "@emotion/react";
import React, { useEffect } from "react";
import Nav from "./Nav/Nav";

interface MenuProps {
    className?: string;
}


function Menu(props: MenuProps) {

    useEffect(() => {
        //
    }, []);

    return (
        <aside
            className={`${props.className}`}
            css={style}
        >

            <Nav />
        </aside>
    );
}


const style = css`
    background-color: rgb(47, 46, 47);
    color: #ebebeb;
`;
export default React.memo(Menu);