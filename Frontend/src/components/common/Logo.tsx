import React from "react";
import logo from "assets/logo.png";
import { css } from "@emotion/react";
function Logo() {
    return (
        <figure
            className="logo"
            css={style}
        >
            <img src={logo} />
        </figure>
    );
}

const style = css`
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`;

export default Logo;