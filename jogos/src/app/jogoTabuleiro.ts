
import { jogo } from "./jogo";

export class jogoTabuleiro extends jogo{
    numeroJogadores:number;

    constructor(titulo: string, anoPublicacao: number, fabricante: string,numeroJogadores:number){
        super(titulo,anoPublicacao,fabricante);
        this.numeroJogadores = numeroJogadores;
    }

    exibirRegras(): string {
        return `O número de jogadore é ${this.numeroJogadores} `;
        
    }


}