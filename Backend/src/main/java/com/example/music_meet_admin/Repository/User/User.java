package com.example.music_meet_admin.Repository.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usernum")
    private int id;
    @Column(name = "id")
    private String userId;
    private String email;
    private String nickname;
    private int state;

}
