import { Component } from '@angular/core';

@Component({
  selector: 'pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {

  cadastrar(): void {
    console.log("Cadastrando..")
  }

}
