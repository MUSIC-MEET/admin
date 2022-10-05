import Title from "components/common/Title";
import ArticleWrapper from "components/UI/ArticleWrapper";
import React from "react";
import MusicAddForm from "./MusicAddForm";
import { useMutation } from "react-query";
import addMusic from "../../../../utils/Musics/addMusic";

/**
 * 음악 추가 페이지
 * @returns 
 */
function Add() {
    const { mutate } = useMutation(["addMusic"], addMusic);

    return (
        <React.Fragment>
            <Title>{"음악 추가"}</Title>
            <ArticleWrapper>
                <MusicAddForm
                    onSend={mutate}
                />
            </ArticleWrapper>
        </React.Fragment>
    );
}

export default Add;