package com.example.music_meet_admin.Controller;

import at.favre.lib.crypto.bcrypt.BCrypt;
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
public class adminController {

    @RequestMapping(value = "/admin/login", method = RequestMethod.POST)
    public ResponseEntity<Object> addMusic(@RequestBody Map<String, String> requestMap)
    {
        final String id = requestMap.get("id");
        final String pw = requestMap.get("pw");





        return new ResponseEntity<>(HttpStatus.OK);
    }

}
