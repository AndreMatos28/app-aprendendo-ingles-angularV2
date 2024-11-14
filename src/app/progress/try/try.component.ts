import { Component, Input, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-try',
  standalone: true,
  imports: [],
  templateUrl: './try.component.html',
  styleUrl: './try.component.scss'
})
export class TryComponent  implements OnInit{

  public coracaoCheio: string = "/assets/coracao_cheio.png";
  public coracaoVazio: string = "/assets/coracao_vazio.png";

  @Input() public tentativas: number = 0;

  public coracoes: Coracao [] = [
    new Coracao(true), new Coracao(true), new Coracao(true)];

  constructor() { }

  ngOnChanges(){
    if ( this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }

  }

  ngOnInit(): void {

  }

}
