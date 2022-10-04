import { css } from "@emotion/react";
import BaseProps from "components/common/BaseProps";
import LabelInput from "components/common/LabelInput";
import React from "react";

function AlbumInfo(props: BaseProps) {
    return (
        <div css={style} className={`${props.className}`}>
            <div className="main-info">
                <LabelInput
                    labelText="음원명"
                    placeholder="음원명을 입력해주세요."
                />
                <LabelInput
                    labelText="아티스트"
                    placeholder="아티스트명을 입력해주세요."
                />
            </div>
            <div className="sub-info">
                <LabelInput
                    labelText="발매일"
                    placeholder="발매일을 입력해주세요."
                />

                <input type="file" />
            </div>

        </div>
    );
}

const style = css`
    display: flex;
    flex-direction: column;

    label {
        padding: 1rem;
        border-radius: 4px;
        width: 100%;
    }

    input[type="text"]{
        padding: 0.5rem;
    }


    .sub-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        label  {
            max-width: 50%;
        }
        
        input[type="file"] {
            border: none;
        }
    }
`;

export default AlbumInfo;