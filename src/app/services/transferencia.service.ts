import { Transferencia } from './../models/transferencia-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

private listaTransferencias: any[];
private url = "http://localhost:3000/transferencias";

constructor(private httpClient : HttpClient) {
  this.listaTransferencias = [];
 }

 get transferencias() {
  return this.listaTransferencias;
 }

 todas() : Observable<Array<Transferencia>>{
  return this.httpClient.get<Array<Transferencia>>(this.url);
 }

 adicionar(transferencia: any) {
  this.hidratar(transferencia);

  this.listaTransferencias.push(transferencia);
 }

 private hidratar(transferencia : any){
  transferencia.data = new Date();
 }

}
