
export abstract class jogo{
    titulo: string;
    anoPublicacao: number;
    fabricante: string;

    constructor(titulo: string,anoPublicacao: number,fabricante: string){
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
        this.fabricante = fabricante;

    }
    abstract exibirRegras(): void
  
}



