package com.velozo.cadastro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.velozo.cadastro.model.Cliente;
import com.velozo.cadastro.model.Representante;
import com.velozo.cadastro.repository.ClienteRepo;
import com.velozo.cadastro.repository.RepresentanteRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RepresentanteController {
 
    @Autowired
    private RepresentanteRepo represRepository;
 
    @GetMapping("/repres")
    public List<Representante> getRepresentante() {
        return (List<Representante>) represRepository.findAll();
    }
    
    @GetMapping("/repres/{id}")
    public Representante getRepresentante(@PathVariable("id") Long id) {
        return represRepository.findById(id).get();
    }
 
    @PostMapping("/repres")
    void addUser(@RequestBody Representante repres) {
        represRepository.save(repres);
    }
    
    @DeleteMapping("/repres")
    void deleteCliente(@RequestBody Representante repres) {
    	represRepository.delete(repres);
    }
}