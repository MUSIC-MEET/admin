package com.example.music_meet_admin.Controller;

import com.example.music_meet_admin.Been.BeenConfig;
import com.example.music_meet_admin.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

@Controller
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<Object> login(@RequestBody Map<String, String> requestMap)
    {
        final String id = requestMap.get("id");
        final String pw = requestMap.get("pw");

        loginService.login(id, pw);

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
