import { jogo } from "./jogo";

export class Biblioteca{
    listaJogos: jogo[]=[];

    adicionarJogo(njogo: jogo) {
        this.listaJogos.push(njogo);
    }


    removerJogo(indice: number) {
        this.listaJogos.splice(indice, 1);
    }
 
    exibirJogos(){
        return this.listaJogos;
    }

}