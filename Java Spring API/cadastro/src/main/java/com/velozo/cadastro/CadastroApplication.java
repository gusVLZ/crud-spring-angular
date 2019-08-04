package com.velozo.cadastro;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.velozo.cadastro.model.Representante;
import com.velozo.cadastro.repository.ClienteRepo;
import com.velozo.cadastro.repository.RepresentanteRepo;

@SpringBootApplication
public class CadastroApplication {

	public static void main(String[] args) {
		SpringApplication.run(CadastroApplication.class, args);
	}
	@Bean
    CommandLineRunner init(ClienteRepo clienteRepository, RepresentanteRepo representanteRepository) {
		
        return args -> {
      
            Stream.of("Mark", "Jeff", "Elon", "Larry", "Katie").forEach(name -> {
                Representante repres = new Representante(name, name+"@embracon.com");
                representanteRepository.save(repres);
            });
            representanteRepository.findAll().forEach(System.out::println);
        };
    }
}
