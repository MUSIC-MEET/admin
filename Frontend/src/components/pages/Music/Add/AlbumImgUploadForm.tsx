import { css } from "@emotion/react";
import React, { useCallback, useRef } from "react";
import Button from "components/common/Button";
import BaseProps from "components/common/BaseProps";

interface AlbumImgUploadFormProps {
    albumImg: string;
}

function AlbumImgUploadForm(props: AlbumImgUploadFormProps & BaseProps) {
    const fileRef = useRef<HTMLInputElement>(null);

    const uploadBtnOnClickHandler = useCallback(() => {
        fileRef.current?.click();
    }, []); return (
        <div css={style} className={`${props.className}`}>
            <figure>
                <img
                    src={props.albumImg}
                    alt=""
                />
            </figure>
            <input ref={fileRef} type="file" hidden />
            <Button
                onClick={uploadBtnOnClickHandler}
                className="upload-btn"
                value="이미지 업로드"
            />
        </div >
    );
}

const style = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    & > figure > img {
        width: 20rem;
        min-height: 15rem;
        border: 1px solid black;
        border-radius: 10px;
    }
    & > .upload-btn {
        width: 15rem;
    }
`;

export default AlbumImgUploadForm;