package com.example.music_meet_admin.Service;


import com.example.music_meet_admin.Repository.Admin.Admin;
import com.example.music_meet_admin.Repository.Admin.AdminRepository;
import com.example.music_meet_admin.Repository.User.User;
import com.example.music_meet_admin.Repository.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

@Service
public class AdminService
{
    @Autowired
    AdminRepository adminRepository;


    public void checkAdmin(String id, String pw){
        //Optional<Admin> responserAdmin = adminRepository.findById(2);
        List<Admin> responserAdmin = adminRepository.findAll();
        System.out.println(responserAdmin.size());
        for (int i = 0; responserAdmin.size() > i; i++) {
            System.out.println(responserAdmin.get(i).getAdminNum());
            System.out.println(responserAdmin.get(i).getId());
            System.out.println(responserAdmin.get(i).getPw());
            System.out.println(responserAdmin.get(i).getAuthority());

        }
    }

    public void checkId(String id) {

        List<Admin> responseAdmin = adminRepository.findById(id);
        for (Admin admins: responseAdmin) {
            System.out.println(admins.getAdminNum());
            System.out.println(admins.getId());
            System.out.println(admins.getPw());
            System.out.println(admins.getAuthority());
        }
    }








}
