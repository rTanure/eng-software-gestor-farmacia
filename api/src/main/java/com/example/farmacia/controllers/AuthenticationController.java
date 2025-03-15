package com.example.farmacia.controllers;

import com.example.farmacia.dtos.AuthenticationRequestDTO;
import com.example.farmacia.dtos.LoginResponseDTO;
import com.example.farmacia.dtos.ResgisterRequestDTO;
import com.example.farmacia.dtos.UserResponseDTO;
import com.example.farmacia.infra.security.TokenService;
import com.example.farmacia.entidades.User;
import com.example.farmacia.repositories.UserRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
    public ResponseEntity<LoginResponseDTO> login(@RequestBody AuthenticationRequestDTO data) {
        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity<LoginResponseDTO> register(@RequestBody ResgisterRequestDTO data) {
        if(this.userRepositorio.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data.login(), encryptedPassword, data.role());

        this.userRepositorio.save(newUser);

        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @GetMapping("/userByToken")
    public ResponseEntity<UserResponseDTO> getUserByToken(@RequestHeader("Authorization") String token) {
        var login = tokenService.validateToken(token);
        User user = userRepositorio.findUserByLogin(login);
        return ResponseEntity.ok(UserResponseDTO.fromUser(user));
    }
}
