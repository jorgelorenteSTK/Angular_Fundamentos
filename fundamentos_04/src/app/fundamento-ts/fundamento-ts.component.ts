import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamento-ts',
  templateUrl: './fundamento-ts.component.html',
  styleUrls: ['./fundamento-ts.component.css']
})
export class FundamentoTSComponent {
  constructor(){}

  //Ejemplo uniones de tipo.
  numbers_strings: (number | string)[] = [1, "ejemplo1"];

  numberExample:  1 | 2 | 3 = 1;
  //numberExample2:  1 | 2 | 3 = 5; Error ya que solo puede aceptar esos valores.

  stringExample: "a" | "b" | "c" = "a";
  //stringExample2: "a" | "b" | "c" = "d"; Error ya que solo acepta esos valores.


  cad: string = "";

  //Ejemplo enumeraciones.
  mes = months.julio;
  months = Object.values(months);

  ngOnInit(){
    this.arrayExamples();
  }

  arrayExamples(){
    let numbers: number[] = [1, 3, 2]; //Declaración de array.

    numbers.push(4); //Añade el elemento al final del array.
    numbers.pop(); //Elimina el último elemento del array.
    numbers.shift(); //Elimina el primer elemento del array.
    numbers.sort(); //Ordena el array.
    
    let numbers2: number[] = [4, 5, 6];

    //Devuelve un array con los nuevos elementos que se le pase como parámetro. Valor suelto o array del mismo tipo.
    let mix = numbers.concat(numbers2);
    console.log(mix);

    //Devuelve el índice del valor dado como parámetro.
    numbers.indexOf(2); 

    let words = new Array("First","Second","Third"); 

    // Convierte el contenido del array en una cadena de texto con un separador pasado por parámetro.
    let cad = words.join(", "); 
    console.log("cad : " + cad);

    //Extrae una porción del array, los parámetros son inico y fin.
    let slicedWord = words.slice(1, 2); 
    console.log(slicedWord);

  }

  addNumber(){
    this.numbers_strings.push(this.numberExample);
    this.cad = "Número añadido con éxito.";
    console.log(this.numbers_strings);
  }

  addString(){
    this.numbers_strings.push(this.stringExample);
    this.cad = "String añadido con éxito.";
    console.log(this.numbers_strings);
  }
}

enum months{
  enero = "enero",
  febrero = "febrero",
  marzo = "marzo",
  abril = "abril",
  mayo = "mayo",
  junio = "junio",
  julio = "julio",
  agosto = "agosto",
  septiembre = "septiembre",
  octubre = "octubre",
  noviembre = "noviembre",
  diciembre = "diciembre"
}
