package com.example.music_meet_admin.JPA;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "admin") // admin 테이블 지정 클래스명과 테이블 명이 동일하면 생략 가능
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Admin {

    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Mysql의 Auto_INCREMENT를 사용
    private Long adminNum;

    //@Column(nullable = false) // NOT NULL 제약조건 == @NOTNULL, @NotNull은 DB에 쿼리문을 날리기 전에 오류를 발생시키므로 더 안전하다.
    @NonNull
    private String id;
    @NonNull
    private String pw;
    @NonNull
    private int authority;

    @Builder
    public void Admin(String id, String pw, int authority){
        this.id = id;
        this.pw = pw;
        this.authority = authority;
    }

}
