import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Pessoa } from './pessoal.model';
//single source of truth SSOT

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  
  constructor(private httpClient: HttpClient) {

  }
  adicionar (pessoa: Pessoa): void{
    this.httpClient.post('', pessoa).subscribe((resposta) => {
      console.log(resposta)
    })  
  }
}
