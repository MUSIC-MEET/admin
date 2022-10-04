import Title from "components/common/Title";
import ArticleWrapper from "components/UI/ArticleWrapper";
import React from "react";
import MusicAddForm from "./MusicAddForm";

/**
 * 음악 추가 페이지
 * @returns 
 */
function Add() {


    return (
        <React.Fragment>
            <Title>{"음악 추가"}</Title>
            <ArticleWrapper>
                <MusicAddForm />
            </ArticleWrapper>
        </React.Fragment>
    );
}

export default Add;