import { css, Interpolation, Theme } from "@emotion/react";
import React from "react";

interface SectionWrapperProps {
    children: React.ReactNode;
    style?: Interpolation<Theme>;
}

function SectionWrapper(props: SectionWrapperProps) {
    return (
        <section css={[style, props.style]}>
            {props.children}
        </section>
    );
}

const style = css`
    width: 100%;
    padding: 1rem;
    background-color: white;
    border-radius: 10px;
`;

export default SectionWrapper;