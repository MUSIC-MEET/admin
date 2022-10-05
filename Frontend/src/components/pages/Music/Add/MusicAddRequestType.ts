import MusicTextInfoType from "../MusicTextInfoType";

type MusicAddRequestType = {
    imgFile: Blob;
    mp3File: Blob;
    textInfo: MusicTextInfoType;
}

export default MusicAddRequestType;