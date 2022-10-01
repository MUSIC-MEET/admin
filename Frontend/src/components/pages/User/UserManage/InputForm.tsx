import Input from "components/common/Input";
import React from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { css } from "@emotion/react";

interface InputFromProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function InputForm({ value, onChange, onSubmit }: InputFromProps) {
    return (
        <form
            css={formStyle}
            onSubmit={onSubmit}
        >
            <PersonSearchIcon />
            <Input
                type={"search"}
                placeholder={"전체 유저 검색"}
                value={value}
                onChange={onChange}
            />
        </form>
    );
}

const formStyle = css`
    position: relative;
    margin-bottom: 0.5rem;
    & > svg {
        position: absolute;
        top: 25%;
        transform: translateX(50%);
    }
    input[type="search"] {
        width: 50rem;
        height: 3rem;
        padding: 1rem;
        padding-left: 3rem;
    }
`;


export default InputForm;