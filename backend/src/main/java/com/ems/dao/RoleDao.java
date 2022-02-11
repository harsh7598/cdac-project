package com.ems.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.pojos.Role;
import com.ems.pojos.UserRole;

public interface RoleDao extends JpaRepository<Role, Integer> {
  Optional<Role> findByRole(UserRole role);
}
