import { css } from "@emotion/react";
import React from "react";

interface TitleProps {
    children: React.ReactNode;
}

function Title(props: TitleProps) {
    return (
        <h1 css={style}>
            {props.children}
        </h1>
    );
}

const style = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
    height: 3rem;
    font-size: 2rem;
    padding-left: 1rem;
    font-weight: 800;
    background-color: white
`;

export default Title;