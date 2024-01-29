import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransacoesComponent } from './transacoes/transacoes.component';
import {MatTableModule} from '@angular/material/table';
import { FormTransacaoComponent } from './transacoes/form-pessoa/form-transacao.component';

@NgModule({
  declarations: [
    AppComponent,
    TransacoesComponent,
    FormTransacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
