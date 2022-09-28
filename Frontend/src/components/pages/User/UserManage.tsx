import Title from "components/common/Title";
import React from "react";
import SectionWrapper from "components/UI/SectionWrapper";
import Input from "components/common/Input";
import { css } from "@emotion/react";
import ArticleWrapper from "components/UI/ArticleWrapper";

function UserManage() {
    return (
        <React.Fragment>
            <Title>{"유저 관리"}</Title>
            <ArticleWrapper>
                <form
                    css={formStyle}
                >
                    <Input
                        type="text"
                    />
                </form>
                <SectionWrapper>
                    {"aasd"}
                </SectionWrapper>
            </ArticleWrapper>
        </React.Fragment>
    );
}

const formStyle = css`
    width: 50vw;
    float: left;
`;

export default UserManage;