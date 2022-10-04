import { css } from "@emotion/react";
import React from "react";
import BaseProps from "./BaseProps";

interface LabelOptionProps {
    labelText: string;
    value: string;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function LabelOption(props: BaseProps & LabelOptionProps) {
    return (
        <label css={defaultStyle}>
            {props.labelText}
            <select
                value={props.value}
                name={props.name}
                onChange={props.onChange}
            >
                <option value="">--장르를 선택하세요--</option>
                <option value="0">발라드</option>
                <option value="1">R&B</option>
                <option value="2">힙합</option>
                <option value="3">트로트</option>
                <option value="4">K-POP</option>
                <option value="5">J-POP</option>
                <option value="6">팝송</option>
                <option value="7">클래식</option>
                <option value="8">댄스</option>
                <option value="9">mr</option>
                <option value="10">jazz</option>
                <option value="11">OST</option>
            </select>
        </label>
    );
}

const defaultStyle = css`
    display: flex;
    flex-direction: column;
    & > select {
        margin-top: 0.5rem;
    }
`;

export default LabelOption;