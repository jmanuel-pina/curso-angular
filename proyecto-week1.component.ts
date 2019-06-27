import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ObjetoNuevo } from './../models/objeto-nuevo.model';

@Component({
  selector: 'app-proyecto-week1',
  templateUrl: './proyecto-week1.component.html',
  styleUrls: ['./proyecto-week1.component.css']
})
export class ProyectoWeek1Component implements OnInit {

  @Input() objetos: ObjetoNuevo;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {}

  ngOnInit() {
  }

}
