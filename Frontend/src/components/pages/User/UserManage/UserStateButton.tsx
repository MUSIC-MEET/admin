import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import ActiveType from "./ActiveType";




function UserStateButton(props: { state?: ActiveType }) {
    const text = ["활성화", "탈퇴", "정지", "미인증"];
    const activeColor = ["#52e184", "#ff0000", "black", "yellow"];
    return (
        // 
        <span css={style}>
            <ActiveCircle
                color={activeColor[props.state || 0]}
            />
            <p>{text[props.state || 0]}</p>
        </span >
    );
}

const ActiveCircle = styled.div<{ color: string }>`
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${props => props.color};
    border-radius: 100%;
    margin-right: 0.5rem;
`;

const style = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default UserStateButton;