package com.velozo.cadastro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.velozo.cadastro.model.Cliente;
import com.velozo.cadastro.repository.ClienteRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {
 
    @Autowired
    private ClienteRepo clienteRepository;
    
    @GetMapping("/")
    public String getHome() {
    	return "{\r\n" + 
    			"    \"nome\": \"API CadastroCliente\",\r\n" + 
    			"    \"endpoints\": [\r\n" + 
    			"        {\r\n" + 
    			"            \"caminho\": \"/cliente\",\r\n" + 
    			"            \"metodos\": {\r\n" + 
    			"                \"get\": \"Lista de clientes cadastrados\",\r\n" + 
    			"                \"post\": [\r\n" + 
    			"                    \"Insere registros\",\r\n" + 
    			"                    \"Atualiza registros\"\r\n" + 
    			"                ],\r\n" + 
    			"                \"delete\": \"deleta registro\"\r\n" + 
    			"            },\r\n" + 
    			"            \"reqFormato\": {\r\n" + 
    			"                \"id\": 1,\r\n" + 
    			"                \"name\": \"foo\",\r\n" + 
    			"                \"email\": \"foo@foo.com\",\r\n" + 
    			"                \"dtVisita\": \"AAAA-MM-DDTHH:MM:SS.SSS\",\r\n" + 
    			"                \"representante\": {\r\n" + 
    			"                    \"id\": 1,\r\n" + 
    			"                    \"nome\": \"bar\",\r\n" + 
    			"                    \"email\": \"bar@bar.com\"\r\n" + 
    			"                }\r\n" + 
    			"                \"valorDesloc\": \"999.99\",\r\n" + 
    			"            }\r\n" + 
    			"        },\r\n" + 
    			"        {\r\n" + 
    			"            \"caminho\": \"/repres\",\r\n" + 
    			"            \"metodos\": {\r\n" + 
    			"                \"get\": \"Lista de representantes cadastrados\",\r\n" + 
    			"                \"post\": [\r\n" + 
    			"                    \"Insere registros\",\r\n" + 
    			"                    \"Atualiza registros\"\r\n" + 
    			"                ],\r\n" + 
    			"                \"delete\": \"deleta registro\"\r\n" + 
    			"            },\r\n" + 
    			"            \"reqFormato\": {\r\n" + 
    			"                \"id\": 1,\r\n" + 
    			"                \"nome\": \"bar\",\r\n" + 
    			"                \"email\": \"bar@bar.com\"\r\n" + 
    			"            }\r\n" + 
    			"        }\r\n" + 
    			"    ]\r\n" + 
    			"}";
    }
 
    @GetMapping("/cliente")
    public List<Cliente> getCliente() {
        return (List<Cliente>) clienteRepository.findAll();
    }
    
    @GetMapping("/cliente/{id}")
    public Cliente getCliente(@PathVariable("id") Long id) {
        return clienteRepository.findById(id).get();
    }
 
    @PostMapping("/cliente")
    void addCliente(@RequestBody Cliente cli) {
    	System.out.println(cli);
    	clienteRepository.save(cli);
    }
    
    @DeleteMapping("/cliente/{id}")
    void deleteCliente(@PathVariable Long id) {
    	Cliente cli = clienteRepository.findById(id).get();
    	clienteRepository.delete(cli);
    }
    
}