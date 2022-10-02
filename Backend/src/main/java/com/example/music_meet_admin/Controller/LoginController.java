package com.example.music_meet_admin.Controller;

<<<<<<< HEAD:Backend/src/main/java/com/example/music_meet_admin/Controller/adminController.java
import com.example.music_meet_admin.Service.AdminService;
=======
import com.example.music_meet_admin.Been.BeenConfig;
import com.example.music_meet_admin.Service.LoginService;
>>>>>>> 1f4ea2e9bc532e6f65207a781adbfb1dd5370977:Backend/src/main/java/com/example/music_meet_admin/Controller/LoginController.java
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

    private LoginService loginService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<Object> login(@RequestBody Map<String, String> requestMap)
    {
        final String id = requestMap.get("id");
        final String pw = requestMap.get("pw");

        loginService.login(id, pw);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/admin/test2", method = RequestMethod.POST)
    public ResponseEntity<Object> test2(@RequestBody Map<String, String> requestMap)
    {
        final String id = requestMap.get("id");
        final String pw = requestMap.get("pw");

        return new ResponseEntity<>(HttpStatus.OK);
    }


}
