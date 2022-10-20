import { Component } from "@angular/core";

@Component({
    selector : "app-nova-transferencia",
    templateUrl : "./nova_transferencia.component.html",
    styleUrls: ["./nova_transferencia.component.scss"]
})
export class NovaTransferenciaComponent {

  valor : number;
  destino : any;

  public transferir() {
    console.log("Solicitação de transferência enviada");
  }

}
