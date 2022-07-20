package com.example.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.BillDao;
import com.example.entities.Bill;

@Service
@Transactional
public class BillService {
	@Autowired
	private BillDao billdao;

	public Bill savebill(Bill bill) {
		// TODO Auto-generated method stub
		return billdao.save(bill);
	}
	
	

}

