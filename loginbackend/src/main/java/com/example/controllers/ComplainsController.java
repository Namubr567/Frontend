package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Complains;
import com.example.service.ComplainService;

@RestController
@RequestMapping("/complains")
@CrossOrigin("http://localhost:4200")
public class ComplainsController {
	@Autowired
	private ComplainService complainservice;
	
	@PostMapping("/saveComplains")
	public ResponseEntity<Complains> saveComplains(@RequestBody Complains complains){
		Complains complainsrecieved=complainservice.savecomplains(complains);
		return new ResponseEntity<Complains>(complainsrecieved,HttpStatus.OK);
	}
	@GetMapping("/getallcomplains")
	public ResponseEntity<List<Complains>> getallcomplains(){
		List<Complains> complains=complainservice.getallcomplains();
		return new ResponseEntity<List<Complains>>(complains,HttpStatus.OK);
	}


}
