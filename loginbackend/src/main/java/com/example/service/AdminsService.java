package com.example.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.AdminsDao;
import com.example.entities.Admin;

@Service
@Transactional
public class AdminsService {
	@Autowired
	private AdminsDao adminsdao;


	public Admin fetchByEmail(String email) {
		// TODO Auto-generated method stub
		return adminsdao.findByEmail(email);
	}
	
	


}
