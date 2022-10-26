import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter} from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector : "app-nova-transferencia",
    templateUrl : "./nova_transferencia.component.html",
    styleUrls: ["./nova_transferencia.component.scss"]
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor : number;
  destino : number;

  constructor(private service : TransferenciaService, private router : Router) {

  }

  public transferir() {
    console.log("Solicitação de transferência enviada");
    this.service.adicionar({valor : this.valor, destino : this.destino}).subscribe(resultado =>{
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.error(error)
    );
  }

  private limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
