import { css } from "@emotion/react";
import GreenButton from "components/common/GreenButton";
import SectionWrapper from "components/UI/SectionWrapper";
import React, { useCallback, useState } from "react";
import MusicTextInfoType from "../MusicTextInfoType";
import AlbumImgUploadForm from "./AlbumImgUploadForm";
import AlbumInfo from "./AlbumInfo";



function MusicAddForm() {

    const [albumImg, setAlbumImg] = useState<any>("");
    const [albumMp3File, setAlbumMp3File] = useState<Blob | null>(null);

    const [textInfo, setTextInfo] = useState<
        MusicTextInfoType
    >({
        origin_title: "",
        origin_signer: "",
        releaseDate: "",
        lyrics: "",
        genre: "",
    });

    const textChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInfo({
            ...textInfo,
            [e.target.name]: e.target.value,
        });
    }, [textInfo]);

    const lyricsChangeHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextInfo({
            ...textInfo,
            lyrics: e.target.value,
        });
    }, [textInfo]);

    const mp3ChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
    }, []);

    const genreChangeHandler = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setTextInfo({
            ...textInfo,
            genre: e.target.value,
        });
    }, [textInfo]);

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(textInfo);
        console.log(albumMp3File);
    }, [albumMp3File, textInfo]);

    return (
        <SectionWrapper>
            <form css={style} onSubmit={onSubmit}>
                <div className="top item">
                    <AlbumImgUploadForm
                        albumImg={albumImg}
                        className={"album-img-upload-form"}
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