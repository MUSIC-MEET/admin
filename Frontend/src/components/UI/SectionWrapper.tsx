import { css } from "@emotion/react";
import React from "react";

interface SectionWrapperProps {
    children: React.ReactNode;
}

function SectionWrapper(props: SectionWrapperProps) {
    return (
        <section css={style}>
            {props.children}
        </section>
    );
}

const style = css`
    width: 95%;
    padding: 1rem;
    background-color: white;
    margin: 0.5rem;
    border-radius: 10px;
`;

export default SectionWrapper;