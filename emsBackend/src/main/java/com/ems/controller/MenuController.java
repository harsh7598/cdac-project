package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dto.EventDTO;
import com.ems.dto.MediaDTO;
import com.ems.pojos.CategoryType;
import com.ems.pojos.Menu;
import com.ems.pojos.SubCategoryType;
import com.ems.services.IMenuServices;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {
	@Autowired
	private IMenuServices menuServices;

//	@GetMapping("/menu")
//	public List<Menu> getAllMenu() {
//		return menuServices.getAllMenu();
//	}
	
//	@PostMapping("/menucategory")
//	public ResponseEntity<?> submitMenu(@RequestBody List<Menu>menuList){
//		
//		return null;
//	}
	
	@GetMapping("/menucategory")
		public List<Menu>getByCategory(@RequestParam String category,@RequestParam String subCategory){
		System.out.println(category+"    "+subCategory);
		if(category.equals("ALL")&&!subCategory.equals("ALL"))
			return menuServices.getBySubCategory(subCategory);
		else if(!category.equals("ALL")&&subCategory.equals("ALL"))
			return menuServices.getByCategory(category);
		else if(category.equals("ALL")&&subCategory.equals("ALL"))
			return menuServices.getAllMenu();
		else
			return menuServices.getByCategoryAndSubCategory(category, subCategory);
		}
	
	@PostMapping("/eventinfo")
	public ResponseEntity<?> registerEvent(@RequestBody EventDTO eventInfo,@RequestBody MediaDTO media,@RequestBody List<Menu> menuList){
		System.out.println(eventInfo);
		System.out.println(media);
		menuList.forEach((e)->System.out.println(e));
		return null;
	}
	
}
