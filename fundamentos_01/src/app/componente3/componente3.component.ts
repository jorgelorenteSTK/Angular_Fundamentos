import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
  constructor() {};

  ngOnInit(){
    this.primitiveTypes();
  }

  primitiveTypes(){
    let numero: number = 1;
    let palabra: string = "palabra";
    let bool: boolean = true;
    let numeroGrande: bigint = 9007199254740991n;
    //BigInt(9007199254740991)
    let simbolo: symbol = Symbol("sym");
    let indefinido: undefined = undefined;
    let nulo: null = null;

    console.log("La variable de tipo '"+typeof numero+"' tiene un valor de '"+numero+"'");
    console.log("La variable de tipo '"+typeof palabra+"' tiene un valor de '"+palabra+"'");
    console.log("La variable de tipo '"+typeof bool+"' tiene un valor de '"+bool+"'");
    console.log("La variable de tipo '"+typeof numeroGrande+"' tiene un valor de '"+numeroGrande+"'");
    console.log("La variable de tipo '"+typeof simbolo+"' tiene un valor de '"+simbolo.toString()+"'");
    console.log("La variable de tipo '"+typeof indefinido+"' tiene un valor de '"+indefinido+"'");
    console.log("La variable de tipo '"+typeof nulo+"' tiene un valor de '"+nulo+"'");
  }

}
