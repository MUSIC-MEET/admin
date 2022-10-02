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
import java.util.Optional;

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
    // 유저 복구.md
    //
    @RequestMapping(path = "/users", method = RequestMethod.PUT)
    public ResponseEntity<Object> userStateModify_(@RequestBody Map<String, String> requestMap) {
        final String id = requestMap.get("id");
        try {
            userService.userStateModify(id, 0);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //
    // 유저 삭제.md
    //
    @RequestMapping(path = "/users", method = RequestMethod.DELETE)
    public ResponseEntity<Object> userStateModify(@RequestBody Map<String, String> requestMap){
        final String id = requestMap.get("id");
        try {
            userService.userStateModify(id, 2);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
