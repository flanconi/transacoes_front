export class Transacao {
    id?:number | null;
    transacao?:string;

    constructor(id?:number| null, transacao?:string){
        this.id = id;
        this.transacao = transacao;
    }
}

export class DadosTransacao{
    data: string;
    valor: number; 
    categoria: string;

    constructor(data:string, valor:number, categoria:string){
        this.data = data;
        this.valor = valor;
        this.categoria = categoria;
    }
}