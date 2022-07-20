package com.example.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.ComplainsDao;
import com.example.entities.Complains;

@Service
@Transactional
public class ComplainService {
	@Autowired
	private ComplainsDao complainsdao;

	public Complains savecomplains(Complains complains) {
		// TODO Auto-generated method stub
		return complainsdao.save(complains);
	}

	public List<Complains> getallcomplains() {
		// TODO Auto-generated method stub
		return complainsdao.findAll();
	}
}
