import React, { useState } from "react";
import UserType from "./UserType";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import UserStateButton from "./UserStateButton";
import styled from "@emotion/styled";
import ActiveType from "./ActiveType";
import ChangeStateFnType from "./ChangeStateFnType";

const ActionList =
    (props: ChangeStateFnType & { userId: string } & { onHide: () => void }) => {
        const changeStateHandler = (state: ActiveType) => {
            props.onChangeState({
                userId: props.userId,
                state: state
            });
            props.onHide();
        };
        return (
            <ActionListWrapper className="actionList">
                <li onClick={() => changeStateHandler(0)}>
                    <UserStateButton state={0} />
                </li>
                <li onClick={() => changeStateHandler(1)}>
                    <UserStateButton state={1} />
                </li>
                <li onClick={() => changeStateHandler(2)}>
                    <UserStateButton state={2} />
                </li>
                <li onClick={() => changeStateHandler(3)}>
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




function User(props: UserType & ChangeStateFnType) {
    const [actionShown, setActionShown] = useState<boolean>(false);

    const actionShwonHandler = () => {
        setActionShown((prev) => !prev);
    };

    const actionHideHandler = () => {
        setActionShown(() => false);
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
                {actionShown
                    &&
                    <ActionList
                        userId={props.userId}
                        onChangeState={props.onChangeState}
                        onHide={actionHideHandler}
                    />
                }
            </div>
        </tr>
    );
}


export default User;