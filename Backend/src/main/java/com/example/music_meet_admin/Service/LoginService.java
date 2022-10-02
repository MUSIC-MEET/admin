package com.example.music_meet_admin.Service;


import com.example.music_meet_admin.Been.BeenConfig;
import com.example.music_meet_admin.Repository.Admin.AdminRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginService {

    @Autowired
    private BeenConfig beenConfig;

    @Autowired
    private AdminRepository adminRepository;




}
