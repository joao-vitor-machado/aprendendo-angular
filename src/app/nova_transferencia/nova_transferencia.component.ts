import { Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector : "app-nova-transferencia",
    templateUrl : "./nova_transferencia.component.html",
    styleUrls: ["./nova_transferencia.component.scss"]
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor : number;
  destino : number;

  public transferir() {
    console.log("Solicitação de transferência enviada");
    this.aoTransferir.emit({valor : this.valor, destino : this.destino});
  }

}
