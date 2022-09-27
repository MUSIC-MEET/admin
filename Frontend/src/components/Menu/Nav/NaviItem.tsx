import styled from "@emotion/styled";
import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NaviItemType from "./NaviItemType";

interface NaviItemProps {
    isCurrent: boolean;
    onChangeCurrent: (index: number) => void;
}

function NaviItem(props: NaviItemType & NaviItemProps) {
    const navigator = useNavigate();
    const location = useLocation();
    const onClickHandler = useCallback(() => {
        props.onChangeCurrent(props.index);
        navigator(`${props.path}`);

    }, [navigator, props]);

    useEffect(() => {
        if (location.pathname === props.path) {
            props.onChangeCurrent(props.index);
        }
    }, [location.pathname, props, props.isCurrent]);
    return (
        <Item
            isClicked={props.isCurrent}
            onClick={onClickHandler}
        >
            {props.name}
        </Item>
    );
}


const Item = React.memo(styled.li<{ isClicked: boolean }>`
    width: 100%;
    height: 3rem;
    padding: 2rem;

    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: rgb(80, 122, 228);
    }
    background: ${props => props.isClicked ? "rgb(30, 92, 249)" : ""};
`);


export default React.memo(NaviItem);
