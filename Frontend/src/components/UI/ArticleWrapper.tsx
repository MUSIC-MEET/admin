import { css, Interpolation, Theme } from "@emotion/react";
import React from "react";

interface ArticleWrapperProps {
    children: React.ReactNode;
    style?: Interpolation<Theme>;
}

function ArticleWrapper(props: ArticleWrapperProps) {
    return (
        <article css={[defaultStyle, props?.style]}>
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