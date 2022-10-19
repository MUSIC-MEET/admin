package com.example.music_meet_admin.Been;

import com.example.music_meet_admin.Service.EncryptionService;
import com.example.music_meet_admin.Service.LoginService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableMBeanExport;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.File;


@Service
@Getter
@Setter
public class BeenConfig
{

    @Value("spring.datasource.driver-class-name")
    private String classForName;

    @Value("spring.datasource.url")
    private String mysqlURL;

    @Value("spring.datasource.username")
    private String mysqlId;

    @Value("spring.datasource.password")
    private String mysqlPw;

    @Value("server.url")
    private String serverUrl;

    @Value("server.port")
    private String serverPort;

    private String musicImagePath = System.getProperty("user.dir") + File.separator + "music_image" + File.separator;

    private String musicMp3FilePath = System.getProperty("user.dir") + File.separator + "music_mp3" + File.separator;
}
