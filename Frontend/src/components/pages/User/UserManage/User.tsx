import React, { useState } from "react";
import UserType from "./UserType";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import UserStateButton from "./UserStateButton";
import styled from "@emotion/styled";

const ActionList = () => {
    return (
        <ActionListWrapper className="actionList">
            <li>
                <UserStateButton state={0} />
            </li>
            <li>
                <UserStateButton state={1} />
            </li>
            <li>
                <UserStateButton state={2} />
            </li>
            <li>
                <UserStateButton state={3} />
            </li>
        </ActionListWrapper>
    );
};

const ActionListWrapper = styled.ul`
    position: absolute;
    border: 1px solid lightgray;
    z-index: 3;
    margin-left: 3rem;
    transform: translateY(-50%);
    li {
        text-align: center;
        cursor: pointer;
        padding: 0.5rem;
        background-color: white;
    }

    li:hover {
        background-color: #f3f3f3;
    }
`;

function User(props: UserType) {
    const [actionShown, setActionShown] = useState<boolean>(false);

    const actionShwonHandler = () => {
        setActionShown(() => !actionShown);
    };

    return (
        <tr className="item">
            <td className="userId">{props.userId}</td>
            <td className="nickname">{props.nickname}</td>
            <td className="email">{props.email}</td>
            <td className="state">
                <UserStateButton state={props.state} />
            </td>
            <div className="action">
                <MoreHorizIcon
                    onClick={actionShwonHandler}
                />
                {actionShown && <ActionList />}
            </div>
        </tr>
    );
}


export default User;