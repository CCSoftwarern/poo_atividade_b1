import { jogo } from "./jogo";

 export class jogoCartas extends jogo{
    idadeMinima:number=10;

    constructor(titulo: string, anoPublicacao: number, fabricante: string,idadeMinima:number){
        super(titulo,anoPublicacao,fabricante);
        this.idadeMinima = idadeMinima;
    }
   
    exibirRegras(): string {
        return `Idade mínima é ${this.idadeMinima} anos`;
        
    }
}