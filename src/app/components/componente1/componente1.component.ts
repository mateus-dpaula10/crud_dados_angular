import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../../modelo/Pessoa';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  formulario: FormGroup

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      idade: [null, [Validators.required, Validators.min(0), Validators.max(120)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]]
    })
  }  

  cadastro: boolean = true
  valoresTable: Pessoa[] = []
  indice: number = -1

  cadastrar() {
    this.valoresTable.push(this.formulario.value as Pessoa)
    this.formulario.reset()
  }

  selecionar(indice: number) {
    this.cadastro = false
    this.indice = indice
    this.formulario.setValue({
      nome: this.valoresTable[indice].nome,
      idade: this.valoresTable[indice].idade,
      cidade: this.valoresTable[indice].cidade
    })
  }

  editar() {
    this.cadastro = true
    this.valoresTable[this.indice] = this.formulario.value as Pessoa
    this.formulario.reset() 
  }

  remover() {
    this.cadastro = true
    this.valoresTable.splice(this.indice, 1)
    this.formulario.reset() 
  }

  cancelar() {
    this.cadastro = true
    this.formulario.reset()
  }

  // formulario = new FormGroup({
  //   nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
  //   cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
  // })
} 