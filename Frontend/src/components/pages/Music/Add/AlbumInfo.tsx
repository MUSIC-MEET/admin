import { css } from "@emotion/react";
import BaseProps from "components/common/BaseProps";
import LabelInput from "components/common/LabelInput";
import LabelOption from "components/common/LabelOption";
import React from "react";
import MusicTextInfoType from "../MusicTextInfoType";


interface AlbumInfoProps {
    text: MusicTextInfoType
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeMp3: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeGenre: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function AlbumInfo(props: BaseProps & AlbumInfoProps) {
    return (
        <div css={style} className={`${props.className}`}>
            <div className="main-info">
                <LabelInput
                    labelText="음원명"
                    placeholder="음원명을 입력해주세요."
                    value={props.text.origin_title}
                    name={"origin_title"}
                    onChange={props.onChange}
                />
                <LabelInput
                    labelText="가수명"
                    placeholder="가수명을 입력해주세요."
                    value={props.text.origin_signer}
                    name={"origin_signer"}
                    onChange={props.onChange}
                />
                <LabelOption
                    labelText="장르"
                    value={props.text.genre}
                    onChange={props.onChangeGenre}
                    name={"genre"}
                />
            </div>
            <div className="sub-info">
                <LabelInput
                    labelText="발매일"
                    placeholder="발매일을 입력해주세요."
                    type={"date"}
                    value={props.text.releaseDate}
                    name={"releaseDate"}
                    onChange={props.onChange}
                />

                <input
                    type="file"
                    onChange={props.onChangeMp3}
                />
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