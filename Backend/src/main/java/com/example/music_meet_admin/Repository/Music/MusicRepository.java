package com.example.music_meet_admin.Repository.Music;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.PersistenceContext;

@Repository
public interface MusicRepository extends JpaRepository<Music, Integer> {

    @Query("select title from music where title = :title")
    String findByMusicTitle(@Param("title")final String title);
}
