package com.example.farmacia.infraestrutura.controllers;

import com.example.farmacia.dominio.dtos.AuthenticationDTO;
import com.example.farmacia.dominio.dtos.LoginResponseDTO;
import com.example.farmacia.dominio.dtos.ResgisterDTO;
import com.example.farmacia.dominio.dtos.UserResponseDTO;
import com.example.farmacia.infra.security.TokenService;
import com.example.farmacia.infraestrutura.entidades.UserEntidade;
import com.example.farmacia.infraestrutura.repositories.UserRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
@CrossOrigin(origins = "*")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepositorio userRepositorio;
    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody AuthenticationDTO data) {
        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((UserEntidade) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity<LoginResponseDTO> register(@RequestBody ResgisterDTO data) {
        if(this.userRepositorio.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        UserEntidade newUser = new UserEntidade(data.login(), encryptedPassword, data.role());

        this.userRepositorio.save(newUser);

        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((UserEntidade) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @GetMapping("/userByToken")
    public ResponseEntity<UserResponseDTO> getUserByToken(@RequestHeader("Authorization") String token) {
        var login = tokenService.validateToken(token);
        UserEntidade userEntidade = userRepositorio.findUserEntidadeByLogin(login);
        return ResponseEntity.ok(UserResponseDTO.fromUserEntidade(userEntidade));
    }
}
