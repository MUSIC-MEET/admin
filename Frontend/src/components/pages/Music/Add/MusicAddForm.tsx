import { css } from "@emotion/react";
import GreenButton from "components/common/GreenButton";
import SectionWrapper from "components/UI/SectionWrapper";
import React, { useState } from "react";
import AlbumImgUploadForm from "./AlbumImgUploadForm";
import AlbumInfo from "./AlbumInfo";



function MusicAddForm() {

    const [albumImg, setAlbumImg] = useState<any>("");
    const [albumName, setAlbumName] = useState<string>("");
    const [artist, setArtist] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [releaseDate, setReleaseDate] = useState<string>("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <SectionWrapper>
            <form css={style}>
                <div className="top item">
                    <AlbumImgUploadForm
                        albumImg={albumImg}
                        className={"album-img-upload-form"}
                    />
                    <AlbumInfo
                        className={"album-info"}
                    />
                </div>

                <div className="middle item">
                    <label
                        htmlFor="music-file"
                    >가사</label>
                    <div className="wrapper">
                        <textarea id="music-file" cols={50} />
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