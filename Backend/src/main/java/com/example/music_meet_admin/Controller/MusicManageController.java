package com.example.music_meet_admin.Controller;

import com.example.music_meet_admin.Been.BeenConfig;
import com.example.music_meet_admin.Repository.Music.Music;
import com.example.music_meet_admin.Service.MusicService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.tritonus.share.sampled.file.TAudioFileFormat;

import javax.sound.sampled.AudioFileFormat;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.UnsupportedAudioFileException;
import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.util.Map;

@Controller
@CrossOrigin("*")
public class MusicManageController {

    @Autowired
    private MusicService musicService;

    @Autowired
    private BeenConfig beenConfig;

    /**
     *  음원 등록.md
     * @param   멀티파트 타입의 이미지와 mp3 파일과 json으로 파싱해야되는 String 타입의 변수
     * @return  DB에 이미 있거나 예외처리 발생시 400, 정상 처리시 201 리턴
     */
    @RequestMapping(value = "/musics", method = RequestMethod.POST, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Object> createMusic(@RequestPart(value = "textInfo") final String requestMusic,
                                              @RequestPart(value = "imgFile") final MultipartFile imageFile,
                                              @RequestPart(value = "mp3File") final MultipartFile mp3File) {

        Gson gson = new Gson();

        Music music = gson.fromJson(requestMusic, Music.class);

        music.setTitle(music.getOrigin_title().replaceAll(" ",""));
        music.setSinger(music.getOrigin_singer().replaceAll(" ",""));
        music.setImgSrc(imageFile.getOriginalFilename().replaceAll(" ", ""));
        music.setFileName(mp3File.getOriginalFilename().replaceAll(" ", ""));

        if (!musicService.findMusicTitle(music.getTitle())){
            try {
                musicService.createMusicFile(imageFile, mp3File);
                AudioFileFormat fileFormat = AudioSystem.getAudioFileFormat(new File(beenConfig.getMusicMp3FilePath() + music.getFileName()));
                if (fileFormat instanceof TAudioFileFormat) {
                    Map<?, ?> properties = ((TAudioFileFormat) fileFormat).properties();
                    String key = "duration";
                    music.setLength( (int) ((Long)properties.get(key) / 1000000L));
                } else {
                    throw new UnsupportedAudioFileException();
                }
                musicService.insertMusicDB(music);
            }catch (Exception e){
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
