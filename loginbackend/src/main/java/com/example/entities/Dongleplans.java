package com.example.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="dongleplans")
public class Dongleplans {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
private int price;
private String validity;
private String description;
public Dongleplans(int id, int price, String validity, String description) {
	super();
	this.id = id;
	this.price = price;
	this.validity = validity;
	this.description = description;
}
public Dongleplans() {
	super();
	// TODO Auto-generated constructor stub
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public int getPrice() {
	return price;
}
public void setPrice(int price) {
	this.price = price;
}
public String getValidity() {
	return validity;
}
public void setValidity(String validity) {
	this.validity = validity;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
}