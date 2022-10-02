package com.example.music_meet_admin.Util;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.GeneralSecurityException;
import java.security.Key;
import java.security.NoSuchAlgorithmException;


//양방향 암호화 알고리즘인 AES256 암호화를 지원하는 클래스 (이메일)
public class AES256Util {


    // 이메일 암호화, 복호화 키
    private String iv = "1009035332sinabro";

    private Key keySpec;

    /*  16자리의 키값을 입력하여 객체를 생성한다.
        @param key 암/복호화를 위한 키값
        @throws UnsupportedEncodingException 키값의 길이가 16이하일 경우 발생
    */


    public AES256Util() throws UnsupportedEncodingException {
        this.iv = iv.substring(0, 16);
        byte[] keyBytes = new byte[16];
        byte[] b = iv.getBytes("UTF-8");
        int len = b.length;
        if (len > keyBytes.length) {
            len = keyBytes.length;
        }
        System.arraycopy(b, 0, keyBytes, 0, len);
        SecretKeySpec keySpec = new SecretKeySpec(keyBytes, "AES");
        this.keySpec = keySpec;
    }

    // 암호화
    public String encrypt(String str) throws NoSuchAlgorithmException,
            GeneralSecurityException, UnsupportedEncodingException
    {
        Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
        c.init(Cipher.ENCRYPT_MODE, keySpec, new IvParameterSpec(iv.getBytes()));
        byte[] encrypted = c.doFinal(str.getBytes("UTF-8"));
        String enStr = new String(Base64.encodeBase64(encrypted));
        //import org.apache.commons.codec.binary.Base64;
        return enStr;
    }

    /*복호화*/

    public String decrypt(String str) throws NoSuchAlgorithmException,
            GeneralSecurityException, UnsupportedEncodingException
    {
        Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
        c.init(Cipher.DECRYPT_MODE, keySpec, new IvParameterSpec(iv.getBytes()));
        byte[] byteStr = Base64.decodeBase64(str.getBytes());
        return new String(c.doFinal(byteStr), "UTF-8");
    }


}
