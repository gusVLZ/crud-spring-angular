package com.velozo.cadastro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.velozo.cadastro.repository.ClienteRepo;
import com.velozo.cadastro.repository.RepresentanteRepo;

import org.json.JSONObject;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MetaController {
	 
	    @Autowired
	    private ClienteRepo clienteRepository;
	    
	    @Autowired
	    private RepresentanteRepo represRepository;
	    
	    @GetMapping("/meta")
	    public String getRepresentante() {
	    	JSONObject retorno = new JSONObject();
	    	retorno.put("maiorCusto",represRepository.getMaiorCusto().get(0));
	    	retorno.put("maiorVisitas",represRepository.getMaiorVisitas().get(0));
	        return retorno.toString();
	    }
	    
}
