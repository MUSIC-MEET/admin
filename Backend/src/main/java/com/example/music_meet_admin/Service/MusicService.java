package com.example.music_meet_admin.Service;

import com.example.music_meet_admin.Been.BeenConfig;
import com.example.music_meet_admin.Repository.Music.Music;
import com.example.music_meet_admin.Repository.Music.MusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@Service
public class MusicService {

    @Autowired
    private MusicRepository musicRepository;

    @Autowired
    private BeenConfig beenConfig;

    /**
     * DB의 music 테이블에 값을 삽입
     *
     * 음원 등록.md에서 동작중
     * @param music
     */
    public void insertMusicDB(Music music){
        musicRepository.save(music);
    }

    /**
     * 음원의 이미지 파일과 mp3파일을 서버에 저장
     * 음원 등록.md에서 동작중
     *
     * @param imageFile MultipartFile 타입의 음원 이미지 파일
     * @param mp3File MultipartFile 타입의 음원 mp3 파일
     * @throws Exception 파일 저장할 때 예외처리 필용
     */
    public void createMusicFile(MultipartFile imageFile, MultipartFile mp3File) throws Exception{

        //System.out.println(beenConfig.getMusicImagePath());
        //System.out.println(beenConfig.getMusicMp3FilePath());

        final String imageName = imageFile.getOriginalFilename().replaceAll(" ", "");
        File newImageFile = new File(beenConfig.getMusicImagePath() + imageName);
        imageFile.transferTo(newImageFile);

        final String mp3Name = mp3File.getOriginalFilename().replaceAll(" ", "");
        File newMp3File = new File(beenConfig.getMusicMp3FilePath() + mp3Name);

        mp3File.transferTo(newMp3File);
    }

    public boolean findMusicTitle(final String title) {
        boolean result = false;

        if (musicRepository.findByMusicTitle(title) != null){
            result = true;
        }


        return result;
    }

}
