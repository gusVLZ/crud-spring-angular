package com.velozo.cadastro.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.velozo.cadastro.model.Cliente;

@Repository
public interface ClienteRepo extends CrudRepository<Cliente, Long>{

}