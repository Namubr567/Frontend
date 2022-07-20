package com.example.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.RechargeHistory;

@Repository
public interface GetRechargeHistoryDao extends JpaRepository<RechargeHistory, Integer> {

}