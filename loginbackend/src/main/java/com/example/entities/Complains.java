package com.example.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="queries")
public class Complains {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private  int id;
	private String email;
	private String query;
	public Complains(int id, String email, String query) {
		super();
		this.id = id;
		this.email = email;
		this.query = query;
	}
	public Complains() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getQuery() {
		return query;
	}
	public void setQuery(String query) {
		this.query = query;
	}
	

}
