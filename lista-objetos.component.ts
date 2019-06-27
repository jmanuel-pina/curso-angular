import { Component, OnInit } from '@angular/core';
import { ObjetoNuevo } from './../models/objeto-nuevo.model';

@Component({
  selector: 'app-lista-objetos',
  templateUrl: './lista-objetos.component.html',
  styleUrls: ['./lista-objetos.component.css']
})
export class ListaObjetosComponent implements OnInit {
  objetos: ObjetoNuevo[];
  constructor() {
  	this.objetos = [];
   }

  nngOnInit() {
  }

  guardar (nombre:string, url:string):boolean { 
    this.objetos.push(new ObjetoNuevo(nombre, url)); 	
    console.log(this.objetos);		
		return false; 			
  }

}

