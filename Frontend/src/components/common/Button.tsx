import { css } from "@emotion/react";
import React from "react";
import BaseProps from "./BaseProps";

interface ButtonProps {
    type?: string;
    value: string;
}

function Button(props: ButtonProps & BaseProps) {
    return (
        <input
            css={defaultStyle}
            onClick={props.onClick}
            className={`${props.className}`}
            type={props.type ?? "button"}
            value={props.value}
        />
    );
}

const defaultStyle = css`
    all: unset;
    cursor: pointer;
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid #979292;
    text-align: center;
`;

export default Button;