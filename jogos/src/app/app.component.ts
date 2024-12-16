import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { Biblioteca } from './biblioteca';
import { jogoCartas } from './jogoCartas';
import { jogoTabuleiro } from './jogoTabuleiro';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
    opcoesSelect: Array<{id:number, nmOpcao:string}>=[
      {id:1, nmOpcao: 'Tabuleiro'},{id:2, nmOpcao: 'Cartas'}
  
    ]
    nwBiblioteca: Biblioteca = new Biblioteca();
    opcaoSelecionada: string = '';
    titulo: string='';
    anoPublicacao: number=0;
    fabricante: string='';
    nJogadoresIdade: number=0;
    regras: string='';
  
  
  
    adicionarJogo() {

      if (this.opcaoSelecionada === "Tabuleiro") {
          this.nwBiblioteca.adicionarJogo(new jogoTabuleiro(this.titulo, this.anoPublicacao, this.fabricante, this.nJogadoresIdade));
      } else if (this.opcaoSelecionada === "Cartas") {
          this.nwBiblioteca.adicionarJogo(new jogoCartas(this.titulo, this.anoPublicacao, this.fabricante, this.nJogadoresIdade));
      } else {
        alert('Tipo de jogo inválido');
      }
 
    }
    removerItem(indice: number) {
      this.nwBiblioteca.removerJogo(indice);
    }
  
  
  }
  
