import Title from "components/common/Title";
import ArticleWrapper from "components/UI/ArticleWrapper";
import React, { useState } from "react";
import MusicAddForm from "./MusicAddForm";
import { useMutation } from "react-query";
import addMusic from "../../../../utils/Musics/addMusic";
import MusicTextInfoType from "../MusicTextInfoType";

/**
 * 음악 추가 페이지
 * @returns 
 */
function Add() {
    const [albumMp3File, setAlbumMp3File] = useState<Blob>(new Blob());
    const [albumImgFile, setAlbumImgFile] = useState<Blob>(new Blob());
    const [imgPreview, setImgPreview] = useState<string>("");
    const [textInfo, setTextInfo] = useState<
        MusicTextInfoType
    >({
        origin_title: "",
        origin_singer: "",
        releaseDate: "",
        lyrics: "",
        genre: "",
    });
    const { mutate } = useMutation(["addMusic"], addMusic, {
        onSuccess: (response) => {
            if (response.status === 201) {
                setAlbumMp3File(() => new Blob());
                setAlbumImgFile(() => new Blob());
                setImgPreview(() => "");
                setTextInfo({
                    origin_title: "",
                    origin_singer: "",
                    releaseDate: "",
                    lyrics: "",
                    genre: "",
                });
                alert("등록 완료");
            }
        }
    });

    return (
        <React.Fragment>
            <Title>{"음악 추가"}</Title>
            <ArticleWrapper>
                <MusicAddForm
                    onSend={mutate}
                    albumMp3File={albumMp3File}
                    albumImgFile={albumImgFile}
                    imgPreview={imgPreview}
                    textInfo={textInfo}
                    setTextInfo={setTextInfo}
                    setAlbumImgFile={setAlbumImgFile}
                    setAlbumMp3File={setAlbumMp3File}
                    setImgPreview={setImgPreview}
                />
            </ArticleWrapper>
        </React.Fragment>
    );
}

export default Add;