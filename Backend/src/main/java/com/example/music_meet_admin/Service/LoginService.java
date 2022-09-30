package com.example.music_meet_admin.Service;


import com.example.music_meet_admin.Been.BeenConfig;
import com.example.music_meet_admin.JPA.Admin;
import com.example.music_meet_admin.JPA.AdminRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.persistence.*;
import java.awt.*;
import java.lang.reflect.Array;

@Service
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginService {

    private BeenConfig beenConfig = new BeenConfig();

    @Autowired
    private AdminRepository adminRepository;

    @PersistenceContext
    EntityManager em;


    public String login(String id, String pw) {
        EntityTransaction tx = em.getTransaction();

        Admin admin = new Admin();
        try{
            tx.begin();
            admin.setId(id);
            admin.setPw(pw);
            em.persist(admin);


            admin =  em.find(Admin.class, "adminNum");

            System.out.println(admin);
            tx.commit();
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            em.close();
        }



        return "";
    }


}
