package com.ems.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.dao.CatererDao;
import com.ems.pojos.Caters;

@Service
@Transactional
public class CatersServicesIMPL implements ICatersServices{
	@Autowired
	private CatererDao caterDao;

	@Override
	public List<Caters> getAllCaters() {
	
		return caterDao.findAll();
	}
	
	
}
