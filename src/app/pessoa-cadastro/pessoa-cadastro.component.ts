import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoal.model';

@Component({
  selector: 'pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {
  
  constructor(private pessoaService: PessoaService){

  }
  cadastrar(meuForm: NgForm): void {
    const pessoa: Pessoa ={
      nome: meuForm.value.nome,
      idade: meuForm.value.idade,
      hobby: meuForm.value.hobby
    }
    this.pessoaService.adicionar(pessoa)  
  }

}
