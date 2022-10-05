import customAxios from "utils/customAxios";
import MusicTextInfoType from "components/pages/Music/MusicTextInfoType";
import { AxiosResponse } from "axios";

const addMusic = 
    ({
        imgFile,
        mp3File,
        textInfo
    }: { 
        imgFile: Blob
        mp3File: Blob
        textInfo: MusicTextInfoType
    }): Promise<AxiosResponse> => {
        const form = new FormData();
        form.append("imgFile", imgFile);
        form.append("mp3File", mp3File);
        form.append("textInfo", JSON.stringify(textInfo));
        
        const axios = customAxios();
        return axios({
            method: "POST",
            url: "/musics",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: form,
        });
        
    };


export default addMusic;