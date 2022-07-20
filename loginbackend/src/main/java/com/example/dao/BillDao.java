package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.Bill;

@Repository
public interface BillDao extends JpaRepository<Bill,Integer> {

}
