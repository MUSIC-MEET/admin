package com.example.music_meet_admin.Service;



import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class EncryptionService
{
    public BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();


}
