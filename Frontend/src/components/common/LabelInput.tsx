import { css } from "@emotion/react";
import React from "react";
import BaseProps from "./BaseProps";

interface LabelInputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelText: string;
    name?: string;
}


function LabelInput(props: LabelInputProps & BaseProps) {
    return (
        <label css={defaultStyle}>
            {props.labelText}
            <input
                className={`${props.className}`}
                css={[props.style, defaultStyle]}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
            />
        </label>

    );
}

const defaultStyle = css`
    display: flex;
    flex-direction: column;
    
    & > input {
        margin-top: 0.3rem;
        border: none;
        border-bottom: 3px solid #c6c6c6;
        &:focus {
            border: none;
            border-bottom: 3px solid #cd883a
        }
    }
    `;

export default LabelInput;