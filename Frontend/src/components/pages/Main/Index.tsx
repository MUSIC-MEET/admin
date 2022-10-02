import { css } from "@emotion/react";
import Title from "components/common/Title";
import ArticleWrapper from "components/UI/ArticleWrapper";
import SectionWrapper from "components/UI/SectionWrapper";
import React from "react";

function Index() {
    return (
        <React.Fragment>
            <Title>{"메인"}</Title>
            <ArticleWrapper>
                <SectionWrapper style={style}>
                    <h2>{"2022/09/27 23:00:01"} </h2>
                    <p>{"총 회원 : 1299 명"}</p>
                    <p>{"총 게시글 : 55112 개"}</p>
                    <p>{"커버 업로드 : 2233 개"}</p>
                    <p>{"신고내역 : 22 개"}</p>
                </SectionWrapper>
            </ArticleWrapper>
        </React.Fragment>
    );
}

const style = css`
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 1.8;

    h2 {
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.2rem;
        font-weight: 400;
    }
`;

export default Index;