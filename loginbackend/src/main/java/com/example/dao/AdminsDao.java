package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.Admin;

@Repository
public interface AdminsDao extends JpaRepository<Admin, Integer> {
	Admin findByEmail(String email);
}
