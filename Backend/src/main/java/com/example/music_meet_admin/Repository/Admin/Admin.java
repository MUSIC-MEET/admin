package com.example.music_meet_admin.Repository.Admin;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Admin
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int adminNum;

    private String id;
    private String pw;
    private int authority;

    @Builder
    public Admin(String id, String pw, int authority){
        this.id = id;
        this.pw = pw;
        this.authority = authority;
    }

}
