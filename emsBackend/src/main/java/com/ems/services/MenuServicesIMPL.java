package com.ems.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.dao.MenuDao;
import com.ems.pojos.Menu;

@Service
@Transactional
public class MenuServicesIMPL implements IMenuServices {
	@Autowired
	private MenuDao menuDao;

	@Override
	public List<Menu> getAllMenu() {
		return menuDao.findAll();
	}

}
