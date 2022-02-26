package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.pojos.Menu;
import com.ems.services.IMenuServices;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {
	@Autowired
	private IMenuServices menuServices;

	@GetMapping("/menu")
	public List<Menu> getAllMenu() {
		return menuServices.getAllMenu();
	}

}
