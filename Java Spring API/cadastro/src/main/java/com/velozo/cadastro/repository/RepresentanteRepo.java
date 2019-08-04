package com.velozo.cadastro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.velozo.cadastro.model.Representante;

@Repository
public interface RepresentanteRepo extends CrudRepository<Representante, Long>{
	
	@Query(value="select TOP 1 REPRESENTANTE.nome, sum(valor_Desloc) as valor from REPRESENTANTE\r\n" + 
			"LEFT JOIN CLIENTE ON\r\n" + 
			"ID_REPRESENTANTE = REPRESENTANTE.ID\r\n" + 
			"GROUP BY REPRESENTANTE.NOME\r\n" + 
			"ORDER BY SUM(VALOR_DESLOC) DESC", nativeQuery=true)
	List<?> getMaiorCusto();
	
	@Query(value="select TOP 1 REPRESENTANTE.nome, count(CLIENTE.ID) as valor from REPRESENTANTE\r\n" + 
			"LEFT JOIN CLIENTE ON\r\n" + 
			"ID_REPRESENTANTE = REPRESENTANTE.ID\r\n" + 
			"GROUP BY REPRESENTANTE.NOME\r\n" + 
			"ORDER BY count(CLIENTE.ID) DESC", nativeQuery=true)
	List<?> getMaiorVisitas();
}

