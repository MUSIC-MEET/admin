package com.example.music_meet_admin.Controller;

import com.example.music_meet_admin.Repository.User.User;
import com.example.music_meet_admin.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin("*")
public class UserManageController {

    @Autowired
    private UserService userService;


    //
    // 유저 정보 조회.md
    //
    @RequestMapping(path = "/users", method = RequestMethod.GET)
    public ResponseEntity<Object> getUsers(){
        List<User> userList = null;
        try {
            userList = userService.getUsers();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    //
    // 유저 검색.md
    //
    @RequestMapping(path = "/users/{keyWord}", method = RequestMethod.GET)
    public ResponseEntity<Object> userSearch(@PathVariable("keyWord") String keyWord) {
        List<User> user;

        try {
            user = userService.userSearch(keyWord);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    //
    // 회원 미인증.md, 회원 정지.md, 회원 활성화.md
    //
    @RequestMapping(path = "/users/{userId}", method = RequestMethod.PUT)
    public ResponseEntity<Object> userStateModify_(@PathVariable("userId") final String userId,
                                                   @RequestBody Map<String, Integer> requestMap) {
        final int state = requestMap.get("state");
        try {
            userService.userStateModify(userId, state);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //
    // 회원 탈퇴 처리.md
    //
    @RequestMapping(path = "/users/{userId}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> userStateModify(@PathVariable("userId") final String userId){
        try {
            userService.userStateModify(userId, 1);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
