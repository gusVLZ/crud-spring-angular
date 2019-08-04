package com.velozo.cadastro.model;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Cliente {

	public Cliente() {}
	
	public Cliente(String nome, String email, Date dtVisita, Representante representante) {
		this.nome = nome;
		this.email = email;
		this.dtVisita = dtVisita;
		this.representante = representante;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String nome;
	private String email;
	private Date dtVisita;
	@JsonIgnore
	@JsonManagedReference
	@ManyToOne
    @JoinColumn(name = "idRepresentante")
	private Representante representante;
	private Double valorDesloc;
    
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

	public Date getDtVisita() {
		return dtVisita;
	}

	public void setDtVisita(Date dtVisita) {
		this.dtVisita = dtVisita;
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

	public Representante getRepresentante() {
		return representante;
	}

	public void setRepresentante(Representante representante) {
		this.representante = representante;
	}

	public Double getValorDesloc() {
		return valorDesloc;
	}

	public void setValorDesloc(Double valorDesloc) {
		this.valorDesloc = valorDesloc;
	}

}
