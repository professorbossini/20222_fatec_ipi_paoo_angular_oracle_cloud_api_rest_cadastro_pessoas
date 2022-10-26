import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {

  cadastrar(meuForm: NgForm): void {
    console.log(meuForm)
  }

}
