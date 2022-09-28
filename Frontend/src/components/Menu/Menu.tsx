import { css } from "@emotion/react";
import Logo from "components/common/Logo";
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
            <Logo />
            <Nav />
        </aside>
    );
}


const style = css`
    background-color: rgb(47, 46, 47);
    color: #ebebeb;
    & > .logo {
        width: 12.5rem;
        height: 6rem;
        margin-left: 2rem;
    }
`;
export default React.memo(Menu);