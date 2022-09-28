import { css } from "@emotion/react";
import React from "react";

interface ArticleWrapperProps {
    children: React.ReactNode;
}

function ArticleWrapper(props: ArticleWrapperProps) {
    return (
        <article css={defaultStyle}>
            {props.children}
        </article >
    );
}

const defaultStyle = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    padding: 1rem;
`;

export default ArticleWrapper;