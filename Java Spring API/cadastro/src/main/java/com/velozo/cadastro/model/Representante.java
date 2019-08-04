package com.velozo.cadastro.model;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Representante {

	public Representante() {
		
	}
	
	public Representante(String nome, String email) {
		this.nome = nome;
		this.email = email;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String nome;
	private String email;
	@JsonBackReference
	@OneToMany(mappedBy = "representante")
	private List<Cliente> clientes;
	private Date dtModificacao = new Date();
	private boolean regAtivo = true;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getnome() {
		return nome;
	}

	public void setnome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDtModificacao() {
		return dtModificacao;
	}

	public void setDtModificacao(Date dtModificacao) {
		this.dtModificacao = dtModificacao;
	}

	public boolean getRegAtivo() {
		return regAtivo;
	}

	public void setRegAtivo(boolean regAtivo) {
		this.regAtivo = regAtivo;
	}

	public List<Cliente> getClientes() {
		return clientes;
	}

	public void setClientes(List<Cliente> clientes) {
		this.clientes = clientes;
	}

}
