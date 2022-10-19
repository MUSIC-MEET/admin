import { css } from "@emotion/react";
import GreenButton from "components/common/GreenButton";
import SectionWrapper from "components/UI/SectionWrapper";
import React, { useCallback, useState } from "react";
import MusicTextInfoType from "../MusicTextInfoType";
import AlbumImgUploadForm from "./AlbumImgUploadForm";
import AlbumInfo from "./AlbumInfo";
import MusicAddRequestType from "./MusicAddRequestType";

interface MusicAddForProps {
    onSend: (request: MusicAddRequestType) => void;
    albumMp3File: Blob;
    albumImgFile: Blob;
    imgPreview: string;
    textInfo: MusicTextInfoType;
    setTextInfo: (textInfo: MusicTextInfoType) => void;
    setAlbumImgFile: (albumImgFile: any) => void;
    setAlbumMp3File: (albumMp3File: Blob) => void;
    setImgPreview: (imgPreview: any) => void;
}

function MusicAddForm(props: MusicAddForProps) {
    const
        {
            onSend,
            albumMp3File,
            albumImgFile,
            imgPreview,
            textInfo,
            setTextInfo,
            setAlbumImgFile,
            setAlbumMp3File,
            setImgPreview
        }
            = props;


    const textChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInfo({
            ...textInfo,
            [e.target.name]: e.target.value,
        });
    }, [setTextInfo, textInfo]);

    const lyricsChangeHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextInfo({
            ...textInfo,
            lyrics: e.target.value,
        });
    }, [setTextInfo, textInfo]);

    const mp3ChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAlbumMp3File(e.target.files![0]);
    }, [setAlbumMp3File]);

    const genreChangeHandler = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setTextInfo({
            ...textInfo,
            genre: e.target.value,
        });
    }, [setTextInfo, textInfo]);

    const imgFileChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAlbumImgFile(() => e.target.files![0]);
        setImgPreview(() => URL.createObjectURL(e.target.files![0]));
    }, [setAlbumImgFile, setImgPreview]);

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSend({
            imgFile: albumImgFile,
            mp3File: albumMp3File,
            textInfo: textInfo,
        });
    }, [albumImgFile, albumMp3File, props, textInfo]);

    return (
        <SectionWrapper>
            <form css={style} onSubmit={onSubmit}>
                <div className="top item">
                    <AlbumImgUploadForm
                        previeImg={imgPreview}
                        className={"album-img-upload-form"}
                        onChange={imgFileChangeHandler}
                    />
                    <AlbumInfo
                        className={"album-info"}
                        text={textInfo}
                        onChange={textChangeHandler}
                        onChangeMp3={mp3ChangeHandler}
                        onChangeGenre={genreChangeHandler}
                    />
                </div>

                <div className="middle item">
                    <label
                        htmlFor="music-file"
                    >{"가사"}</label>
                    <div className="wrapper">
                        <textarea
                            id="music-file"
                            cols={50}
                            value={textInfo.lyrics}
                            name={"lyrics"}
                            onChange={lyricsChangeHandler}
                        />
                    </div>
                </div>

                <div className="bottom item">
                    <GreenButton
                        value="등록"
                        type="submit"
                    />
                </div>
            </form>
        </SectionWrapper>
    );
}

const style = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .item {
        margin-bottom: 1rem;
        width: 100%;
    }
    & > .top {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;

        .album-img-upload-form {
            width: 20rem;
        }

        .album-info {
            width: 50%;
        }
        
    }

    & > .middle {

        label {
            font-weight: 800;
        }
        textarea {
            width: 100%;
            overflow-y: scroll;
            min-height: 30rem;
            font-size: 1.2rem;
        }
    }

    & > .bottom {
        display: flex;
        justify-content: flex-end;
        input[type="submit"] {
            width: 5rem;
            height: 3.5rem;
            font-size: 1.2rem;
        }
    }

`;
export default MusicAddForm;