import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransacoesService } from '../transacoesService.service';
import { Transacao } from '../transacao';

@Component({
  selector: 'app-form-transacao',
  templateUrl: './form-transacao.component.html',
  styleUrls: ['./form-transacao.component.scss']
})
export class FormTransacaoComponent {
  @Input() transacaoId?: number | null ;
  @Output() statusFinalizado: EventEmitter<boolean> = new EventEmitter();
  listaTransacoes: Transacao[] = [];

  formTransacao: FormGroup = new FormBuilder().group({
    data: ['', Validators.required],
    valor: ['', Validators.required],
    categoria: ['', Validators.required],
  });

  constructor(private transacaoServ: TransacoesService) {

  }

  alteraTransacao(): void {
    const dadosTransacao: string = `${this.formTransacao.controls['data'].value},${this.formTransacao.controls['valor'].value},${this.formTransacao.controls['categoria'].value}`;
    const transacao: Transacao = new Transacao(this.transacaoId!, dadosTransacao);
    this.transacaoServ.modificarTransacao(transacao).subscribe({
      error: () => {
        window.alert('Não foi possível alterar a transação');
      },
      complete: () => {
        this.statusFinalizado.emit(true)
        window.alert(`Transação com id ${transacao.id} foi alterada`);
      }
    })
  }

  salvaNovaTransacao():void{
    this.criaListaTransacoes();
    console.log(this.listaTransacoes);
    this.transacaoServ.salvarTransacao(this.listaTransacoes).subscribe({
      error: () => {
        window.alert('Não foi possível salvar a transação');
      },
      complete: () => {
        this.statusFinalizado.emit(true)
        window.alert(`Transação foi adicionada com sucesso`);
      }
    })
  }

  criaListaTransacoes():void{
    const dadosTransacao: string = `${this.formTransacao.controls['data'].value},${this.formTransacao.controls['valor'].value},${this.formTransacao.controls['categoria'].value}`;
    const transacao: Transacao = new Transacao(null, dadosTransacao);
    this.listaTransacoes.push(transacao)
    this.formTransacao.reset();
  }
}
