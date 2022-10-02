import { css } from "@emotion/react";
import React from "react";
import BaseProps from "./BaseProps";

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps & BaseProps) {
    return (
        <input
            className={`${props.className}`}
            css={[props.style, defaultStyle]}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

const defaultStyle = css`
    border: 1px solid #ebebeb;
`;
export default Input;