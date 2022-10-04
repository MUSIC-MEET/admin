package com.example.music_meet_admin.Controller;

import com.example.music_meet_admin.Been.BeenConfig;
import com.example.music_meet_admin.Repository.Music.Music;
import com.example.music_meet_admin.Service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.UnsupportedAudioFileException;
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
     * @param
     * @return
     */
    @RequestMapping(value = "/musics", method = RequestMethod.POST, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Object> createMusic(@RequestPart(value = "body") final Music music,
                                              @RequestPart(value = "image") final MultipartFile imageFile,
                                              @RequestPart(value = "mp3") final MultipartFile mp3File) {




        boolean result = true;
        music.setTitle(music.getTitle().replaceAll(" ",""));
        music.setSinger(music.getSinger().replaceAll(" ",""));
        music.setImgSrc(imageFile.getOriginalFilename().replaceAll(" ", ""));
        music.setFileName(mp3File.getOriginalFilename().replaceAll(" ", ""));

        File file = new File("src/resources/audio/test.mp3");
        try {
            AudioInputStream ain = AudioSystem.getAudioInputStream(file);
            Long time = AudioSystem.getAudioInputStream(file).getFrameLength();
        } catch (UnsupportedAudioFileException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        //music.setLength();
        System.out.println(music);


        try{
            musicService.insertMusicDB(music);
            musicService.createMusicFile(imageFile, mp3File);
        }catch (Exception e){
            e.printStackTrace();
            result = false;
        }
        if (result) {
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
