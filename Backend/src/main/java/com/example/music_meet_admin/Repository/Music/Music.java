package com.example.music_meet_admin.Repository.Music;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Music {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int musicNum;
    @Column(name = "ImgSrc")
    private String imgSrc;
    private String origin_title;
    private String origin_singer;
    private String title;
    private String singer;
    @Column(name = "Album")
    private String album;
    private String releaseDate;
    private String lyrics;
    @Column(name = "FileName")
    private String fileName;
    private String Length;
    private String genre;
}
