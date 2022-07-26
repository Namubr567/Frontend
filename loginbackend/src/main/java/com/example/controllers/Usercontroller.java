package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.example.entities.ContactUs;
import com.example.entities.ErrorClazz;
import com.example.entities.Users;
import com.example.service.UserService;
//import com.example.service.UserdetailsService;

@RestController
@RequestMapping("/userdetails")
@CrossOrigin(origins="http://localhost:4200")
	
public class Usercontroller {

	public Usercontroller() {
		System.out.println("<<<<<<<<USERCONTROLLER INSTANTIATED>>>>>>>>");
	}
	@Autowired
	private UserService userdetailsService;
	
//	@Autowired
//	private UserService users;
	@PostMapping("/save")
	public ResponseEntity<?> saveUserdetails(@RequestBody Users userdetails) {
		
		try {
			userdetails=userdetailsService.saveUserdetails(userdetails);
			return new ResponseEntity<Users>(userdetails, HttpStatus.CREATED);
		}catch(Exception e) {
			ErrorClazz errorClazz=new ErrorClazz(500,e.getMessage());
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
		@GetMapping("/alluserdetails")
	public ResponseEntity<?> getAllUserdetails(){
		try {
			List<Users> userdetails=userdetailsService.getAllUserdetails();
			return new ResponseEntity<List<Users>>(userdetails,HttpStatus.OK);
		}catch(Exception e) {
			ErrorClazz errorClazz=new ErrorClazz(500,e.getMessage());
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
		@GetMapping("/getuserdetails/{id}")
		public ResponseEntity<?> getUserdetailsByID(@PathVariable int id){
			Optional<Users> userdetails=null;
			try {
				userdetails =userdetailsService.getUserdetailsById(id);
				return new ResponseEntity<Optional<Users>>(userdetails,HttpStatus.OK);
			}catch(Exception e) {
				ErrorClazz errorClazz=new ErrorClazz(500,e.getMessage());
				return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
			}
	    }
		@PutMapping("/update")
		public ResponseEntity<?> updateuserdetails(@RequestBody Users userdetails){
			try {
				userdetailsService.updateuserdetails(userdetails);
				return new ResponseEntity<Void>(HttpStatus.OK);
			}catch(Exception e) {
				ErrorClazz errorClazz=new ErrorClazz(500,e.getMessage());
				return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		}
		@DeleteMapping("/delete/{id}")
		public ResponseEntity<?>deleteUserdetails(@PathVariable int id){
			try {
				userdetailsService.deleteUserdetails(id);
				return new ResponseEntity<Void>(HttpStatus.OK);
			}catch(Exception e) {
				ErrorClazz errorClazz=new ErrorClazz(500,e.getMessage());
				return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		}
//		@PostMapping("/signup")
//		public  ResponseEntity<?> signupUser(@RequestBody Userdetails userdetails){
//			String emailId=userdetails.getEmail();
//			if(emailId!=null && !"".equals(emailId)) {
//				Userdetails userobj =userdetailsService.findbyEmailId(emailId);
//				if(userobj!= null) {
//					return (ResponseEntity<?>) ResponseEntity.internalServerError();
//				}
//				
//			}
//			Userdetails userObj=null;
//			userObj=userdetailsService.saveUserdetails(userdetails);
//			return ResponseEntity.ok(userObj);
//			
//		}
//			
//		
//		
//		@PostMapping("/userlogin")
//		public  ResponseEntity<?> loginUser(@RequestBody Userdetails userdetails){
//			System.out.println(userdetails);
//			Userdetails user=userdetailsService.findbyEmailId(userdetails.getEmail());
//			if(user.getPassword() == null || user.getPassword().equals(userdetails.getPassword()))
//				return ResponseEntity.ok(user);
//			return (ResponseEntity<?>) ResponseEntity.internalServerError();
//			
//		}
//		
//		
//		
//		@PostMapping("/contactus")
//		public  ResponseEntity<?> contactus(@RequestBody ContactUs userData){
//			ContactUs contactObj=null;
//			contactObj=userdetailsService.saveContact(userData);
//			return ResponseEntity.ok(contactObj);
//		}
//		
//	}


}
