package com.example.music_meet_admin.Service;


import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Getter
@Setter
public class EncryptionService
{
    public BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

}
