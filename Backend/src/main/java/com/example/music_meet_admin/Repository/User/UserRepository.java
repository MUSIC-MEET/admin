package com.example.music_meet_admin.Repository.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    //
    // 참고용 안쓸거임
    //
    @Query("select u from User u where u.userId like %:keyword% OR u.nickname like %:keyword%")
    List<User> userSearch(@Param("keyword") String key);

    //
    // 회원 복구, 삭제
    //
    @Transactional
    @Modifying
    @Query("update User set state = :state where userId = :id")
    void userStateModify(@Param("id") String id, @Param("state") int state);

}
