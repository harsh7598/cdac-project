package com.ems.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dto.AuthenticationResponse;
import com.ems.dto.LoginDTO;
import com.ems.dto.RegisterDTO;
import com.ems.jwt_utils.JwtUtils;
import com.ems.services.IUserServices;
@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {
	
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private IUserServices userServices;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	BCryptPasswordEncoder passwordEncoder;

	@PostMapping("/registration")
	public ResponseEntity<?> userRegistration(@RequestBody RegisterDTO request) {
		System.out.println("in user reg " + request);
		return ResponseEntity.ok(userServices.registerUser(request));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginDTO request) {
		System.out.println("in auth " + request);
		try {
			Authentication authenticate = authManager.authenticate
			(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));			
			System.out.println("auth success " + authenticate);
			return ResponseEntity.ok(new AuthenticationResponse(jwtUtils.generateJwtToken(authenticate)));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("User authentication Failed", e);
		}
	}
}
