package com.ems.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.dao.StudioDao;
import com.ems.pojos.Event;
import com.ems.pojos.Studio;

@Service
@Transactional
public class StudioServicesIMPL implements IStudioServices {

	@Autowired
	StudioDao studioDao;
	@Autowired
	private EventServicesIMPL es;
	
	@Override
	public List<Studio> getAllStudio() {
		
		return studioDao.findAll();
	}
	@Override
	public void assignStudio(int id, Studio studio) {
		Event e=es.getById(id);
		e.setStudio(studio);
	}
	@Override
	public Studio addStudio(Studio studio) {
		
		return studioDao.save(studio);
	}

}
