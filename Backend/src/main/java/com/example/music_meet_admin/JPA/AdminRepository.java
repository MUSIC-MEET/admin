package com.example.music_meet_admin.JPA;

import org.springframework.data.jpa.repository.JpaRepository;


public interface AdminRepository extends JpaRepository<Admin, Long> //  JpaRepository<객체, @Id 타입>
{
    
}
