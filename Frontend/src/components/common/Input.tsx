import { css } from "@emotion/react";
import React from "react";
import BaseProps from "./BaseProps";

interface InputProps {
    type?: string;
}

function Input(props: InputProps & BaseProps) {
    return (
        <input
            className={`${props.className}`}
            css={[props.style, defaultStyle]}
            type={props.type}
        />
    );
}

const defaultStyle = css`
    border: 1px solid #ebebeb;
`;
export default Input;