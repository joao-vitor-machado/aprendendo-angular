import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank';
  transferencias : Array<any> = new Array();

  constructor (private service : TransferenciaService){}

  transferir($event) {
    console.log($event);
    this.service.adicionar($event);

  }
}
