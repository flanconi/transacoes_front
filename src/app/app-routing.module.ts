import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransacoesComponent } from './transacoes/transacoes.component';

const routes: Routes = [
  { path:'', component: TransacoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
