package com.ems.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.pojos.Menu;

public interface MenuDao extends JpaRepository<Menu,Integer> {

}
