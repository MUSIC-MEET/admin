import { css } from "@emotion/react";
import React from "react";
import User from "./User";
import UserType from "./UserType";

function Result({ result }: { result?: UserType[] }) {
    return (
        <table css={style} className="total">
            <caption>
                {"전체 "}<b className="count">{result?.length}</b>{"명"}
            </caption>
            <thead>
                <tr>
                    <th className="userId">아이디</th>
                    <th className="nickname">닉네임</th>
                    <th className="email">이메일</th>
                    <th className="state">상태</th>
                    <th className="action"></th>
                </tr>
            </thead>
            <tr>
            </tr>
            <tbody>
                <React.Fragment>
                    {result?.map((user) => (
                        <User
                            key={user.id}
                            {...user}
                        />
                    ))}
                </React.Fragment>
            </tbody>
        </table>
    );
}

const style = css`
    width: 100%;
    caption {
        text-align: left;
        .count {
            color: #52e184;
        }
        margin-bottom: 1rem;
        font-weight: 800;
    }

    th {
        font-weight: 400;
        border-bottom: 2px solid lightgray;
        min-height: 4rem;
        margin-bottom: 1rem;
    }

    th, td {
        text-align: center;
    }

    .userId {
        width: 25%;
    }

    .nickname {
        width: 25%;
    }

    .email {
        width: 25%;
    }

    .state {
        width: 15%;
    }

    .action {
      
    }
    tr.item:hover {
            background-color: #f3f3f3;
    }

    td {
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    svg {
        transform: translateY(0%);
        cursor: pointer;
    }



`;
export default Result;