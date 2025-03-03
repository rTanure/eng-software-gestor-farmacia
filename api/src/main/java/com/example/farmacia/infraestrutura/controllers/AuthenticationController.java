package com.example.farmacia.infraestrutura.controllers;

import com.example.farmacia.dominio.dtos.AuthenticationDTO;
import com.example.farmacia.dominio.dtos.ResgisterDTO;
import com.example.farmacia.dominio.models.User;
import com.example.farmacia.infraestrutura.entidades.UserEntidade;
import com.example.farmacia.infraestrutura.repositories.UserRepositorio;
import jdk.jfr.Registered;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepositorio userRepositorio;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AuthenticationDTO data) {
        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = authenticationManager.authenticate(usernamePassword);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody ResgisterDTO data) {
        if(this.userRepositorio.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        UserEntidade newUser = new UserEntidade(data.login(), encryptedPassword, data.role());

        this.userRepositorio.save(newUser);

        return ResponseEntity.ok().build();
    }

}
