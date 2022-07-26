package com.example.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.AdminDao;
import com.example.dao.ContactUsdao;
import com.example.dao.GetRechargeHistoryDao;
import com.example.entities.Users;

@Service
@Transactional
public class AdminService {
	

		public AdminService() {
			System.out.println("<<<<<<<<<<<<<<<POST SERVICE INSTANTIATED>>>>>>>>>>>>>>>>>>>>>>>>>");
		}
		
		@Autowired
		GetRechargeHistoryDao recharge;
		
		@Autowired
		ContactUsdao contactus;
		
		@Autowired
		AdminDao userdao;
		

	public Users saveUserdetails(Users userdetails) {
		userdao.save(userdetails);
		return userdetails;
	}
	public List<Users> getAllUserdetails(){
		return userdao.findAll();
	}
	public Optional<Users> getUserdetailsById(int id){
		return userdao.findById(id);
	}
	public Users updateuserdetails(Users userdetails) {
		return userdao.save(userdetails);
	}
	public void deleteUserdetails(int id) {
		userdao.deleteById(id);
	}
}