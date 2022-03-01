package com.ems.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.pojos.Event;
import com.ems.pojos.User;

public interface EventDao extends JpaRepository<Event, Integer> {
}
