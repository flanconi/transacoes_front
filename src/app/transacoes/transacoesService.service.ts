import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from './transacao';

@Injectable({
    providedIn: 'root'
})
export class TransacoesService {

    constructor(private http: HttpClient) { }

    private url = 'http://localhost:8080/'

    private urltransacao = 'transacao';
    private urlcategoria = 'categoria';

    public buscaTransacao(): Observable<any> {
        return this.http.get<any>(this.url + this.urltransacao);
    }

    public apagarTransacao(id: number): Observable<any> {
        const params: HttpParams = new HttpParams({fromObject: {id: id}});
        return this.http.delete<any>(this.url + this.urltransacao, {params});
    }

    public salvarTransacao(transacao: Transacao[]): Observable<any> {
        return this.http.post<any>(this.url + this.urltransacao, transacao);
    }

    public modificarTransacao(transacao: Transacao): Observable<any> {
        return this.http.put<any>(this.url + this.urltransacao, transacao);
    }

    public buscaGastoPorCategoria(categoria: string): Observable<any> {
        const params: HttpParams = new HttpParams({fromObject: {categoria: categoria}});        
        return this.http.get<any>(this.url + this.urlcategoria, {params});
    }

}
