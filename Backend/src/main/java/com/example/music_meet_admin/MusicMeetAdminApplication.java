package com.example.music_meet_admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.stereotype.Repository;

import javax.persistence.*;



@SpringBootApplication(exclude = SecurityAutoConfiguration.class) // 시큐리티 끔
//@EnableJpaAuditing
public class MusicMeetAdminApplication {

	@PersistenceUnit
	EntityManagerFactory emf;
	public static void main(String[] args) {

		SpringApplication.run(MusicMeetAdminApplication.class, args);
	}

}
