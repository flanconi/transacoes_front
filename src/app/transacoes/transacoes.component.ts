import { Component, OnInit } from '@angular/core';
import { TransacoesService } from './transacoesService.service';
import { Transacao } from './transacao';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {

  listaTransacoes: Transacao[] = [];
  transacaoSelecionada: Transacao = new Transacao();
  salvarSelecionado: boolean = false;
  categoria: string = '';
  valorGastoPorCategoria: number | undefined;
  categoriaSelecionada: string = '';

  constructor(private transacaoServ: TransacoesService) { }

  ngOnInit(): void {
    this.buscaTransacoes();
  }

  compare(a: Transacao, b: Transacao) {
    const firstIndexA: number = a.transacao!.indexOf(',')
    const dataA = a.transacao!.substring(0, firstIndexA);

    const firstIndexB: number = b.transacao!.indexOf(',')
    const dataB = b.transacao!.substring(0, firstIndexB);

    if (dataA < dataB) return -1;
    if (dataA > dataB) return 1;
    return 0;
  }

  filtro():void{
    this.listaTransacoes = this.listaTransacoes.sort(this.compare);
    
  }

  buscaTransacoes(): void {
    this.listaTransacoes = [];
    this.transacaoServ.buscaTransacao().subscribe({
      next: (data) => {
        data.map((transacao: Transacao) => {
          this.listaTransacoes.push(transacao)
        })
      },
      error: () => {
        window.alert('Não foi possível buscar todas as transações')
      }
    })
  }

  deletaTransacao(id: number): void {
    this.transacaoServ.apagarTransacao(id).subscribe({
      error: () => {
        window.alert('Não foi possível apagar transação');
      },
      complete: () => {
        this.buscaTransacoes();
        window.alert(`Transação com id ${id} foi excluída`);
      }
    })
  }

  buscaValorGasto(): void {
    this.categoriaSelecionada = this.categoria;
    this.categoria = '';
    this.transacaoServ.buscaGastoPorCategoria(this.categoria.toLowerCase()).subscribe({
      next: (data) => {
        this.valorGastoPorCategoria = data;
      },
      error: (error) => {
        window.alert('Não foi possível buscar valor gasto')
      }
    })
  }

  seleciona(transacao: Transacao) {
    transacao == this.transacaoSelecionada ? this.transacaoSelecionada = new Transacao() : this.transacaoSelecionada = transacao;
  }

  atualizaTela() {
    this.salvarSelecionado = false;
    this.transacaoSelecionada = new Transacao();
    this.buscaTransacoes();
  }
}
