package com.example.music_meet_admin.Service;

import com.example.music_meet_admin.Repository.User.User;
import com.example.music_meet_admin.Repository.User.UserRepository;
import com.example.music_meet_admin.Util.AES256Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;



    //
    // 유저 정보 조회
    //
    public List<User> getUsers() throws Exception {
        List<User> userList = userRepository.findAll();
        AES256Util aes256Util = new AES256Util();
        for (int i = 0; userList.size() > i; i++) {
            userList.get(i).setEmail(aes256Util.decrypt(userList.get(i).getEmail()));
        }
        return userList;
    }

    //
    // 유저 검색
    //
    public List<User> userSearch(final String keyWord) throws Exception {
        AES256Util aes256Util = new AES256Util();
        List<User> userList_1 = new ArrayList<>();
        List<User> userList_2 = userRepository.findAll();
        for (int i = 0; userList_2.size() > i; i++) {
            userList_2.get(i).setEmail(aes256Util.decrypt(userList_2.get(i).getEmail()));

            if (userList_2.get(i).getEmail().contains(keyWord) || userList_2.get(i).getUserId().contains(keyWord) || userList_2.get(i).getNickname().contains(keyWord)) {
                userList_1.add(userList_2.get(i));
            }

        }
        return userList_1;
    }

    //
    // 유저 복구, 삭제
    //
    public void userStateModify(final String id, final int state) throws Exception {
        userRepository.userStateModify(id, state);
    }
}
