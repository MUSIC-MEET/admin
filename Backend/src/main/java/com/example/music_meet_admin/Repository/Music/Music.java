package com.example.music_meet_admin.Repository.Music;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;

@Entity(name = "music")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Music {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int musicNum;
    @Column(name = "imgsrc")
    private String imgSrc;
    private String origin_title;
    private String origin_singer;
    private String title;
    private String singer;
    @Column(name = "releasedate")
    private String releaseDate;
    private String lyrics;
    @Column(name = "filename")
    private String fileName;
    private String Length;
    private int vote;
    private String genre;
}
