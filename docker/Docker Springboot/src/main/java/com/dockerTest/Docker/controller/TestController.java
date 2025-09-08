package com.dockerTest.Docker.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestController
public class TestController {

    @RequestMapping("/")
    public Map<String, Object> getValues(){
        Map<String, Object> data=new HashMap<>();
        data.put("message", "Java api is working file");
        data.put("code", "5432");
        data.put("languages", Arrays.asList("Java" , "Python","JavaScript"));

        return data;

    }
}
