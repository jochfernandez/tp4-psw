import { Component } from '@angular/core';
import {Palabra} from "../../models/palabra";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {
  opcionSeleccionada!: number;
  acertados: Map<String,number> = new Map<String,number>();
  palabraSeleccionada!: Palabra;
  valoresPosibles: Set<number> = new Set<number>();
  opcionUsuario!: number;
  palabras: Array<Palabra> = [];
  palabrasMostradas: number = 0;
  private otrasOpciones!: Array<number>;
  opcionCorrecta!:number;
  mostrarBotonJugar: boolean = true;
  mostrarMenuOpciones: boolean = false;
  mostrarJuego : boolean = false;

  constructor(private router: Router) {
    this.opcionSeleccionada = 1;
  }
  precargar() {
    this.palabras.push(new Palabra("Perezoso"));
    this.palabras.push(new Palabra("AMACA"));
    this.palabras.push(new Palabra("GATO"));
    this.palabras.push(new Palabra("Perro"));
    this.palabras.push(new Palabra("Casa"));
    this.palabras.push(new Palabra("Motocicleta"));
    this.palabras.push(new Palabra("Frutilla"));
    this.palabras.push(new Palabra("PERA"));
    this.palabras.push(new Palabra("Manzana"));
    this.palabras.push(new Palabra("GorraSelectiva"));
  }
  elegirOpcion(opcion: number) {
    console.log("Las palabras del arreglo son "+this.mostrarPalabras());
    let palabraEnJuego = this.traerPalabraAleatoria();
    this.valoresPosibles = new Set<number>();
    this.opcionUsuario = opcion;
    this.evaluarOpcion(opcion, palabraEnJuego);
  }
  evaluarOpcion(opcion: number, palabra: Palabra){
    switch (opcion) {
      case 1:
        this.valoresPosibles.add(palabra.letras);
        break;
      case 2:
        this.valoresPosibles.add(palabra.silabas);
        break;
      case 3:
        this.valoresPosibles.add(palabra.consonantes);
        break;
      case 4:
        this.valoresPosibles.add(palabra.vocales);
        break;
      case 5:
        this.valoresPosibles.add(palabra.letrasMayusculas);
        break;
    }
    this.completarOpciones(this.valoresPosibles);
    console.log("Las opciones son: "+this.mostrarOpcionesDelSet());
  }
  traerPalabraAleatoria(): Palabra{
    let indice = Math.floor(Math.random() * this.palabras.length);
    this.palabraSeleccionada = this.palabras[indice];
    return this.palabraSeleccionada;
  }
  completarOpciones(valoresPosibles: Set<number>){
    this.otrasOpciones = [];
    this.opcionCorrecta = Array.from(valoresPosibles).at(0) as number;
    this.otrasOpciones = this.generarValoresAleatorios(this.opcionCorrecta);
    this.otrasOpciones.forEach((valor, index) => {
      valoresPosibles.add(valor);
    });
    this.valoresPosibles=this.mezclarOpciones(valoresPosibles);
  }
  generarValoresAleatorios(base: number): Array<number>{
    let valores = [base];
    while(valores.length < 4){
      // Genera un número aleatorio entre base - 4 y base + 4
      let valor = Math.floor(Math.random() * 9) + base - 4;
      if(valor !== 0 && valores.indexOf(valor) === -1 && valor >= 0){
        valores.push(valor);
      }
    }
    return valores;
  }
  private mezclarOpciones(valoresPosibles: Set<number>) {
    let array = Array.from(valoresPosibles);
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    let setMezclado = new Set(array);
    return setMezclado;
  }
  protected readonly Array = Array;
  comprobarRespuesta(respuesta: number, palabraEnviada: Palabra){
    if(respuesta === this.opcionCorrecta){
      this.acertados.set(palabraEnviada.palabra, 1);
      console.log("Correcto");
    }else{
      this.acertados.set(palabraEnviada.palabra, 0);
      console.log("Incorrecto");
    }
    this.palabrasMostradas++;
    console.log("Se eliminara esta palabra de la lista: "+palabraEnviada.palabra);
    this.eliminarPalabra(palabraEnviada);
    this.mostrarJuego = false;
    this.mostrarMenuOpciones = true;
  }
  eliminarPalabra(palabra: Palabra){
    this.palabras = this.palabras.filter(p => p !== palabra);
    this.mostrarPalabras();
  }
  reiniciar() {
    this.acertados = new Map<String,number>();
    this.valoresPosibles = new Set<number>();
    this.palabras = [];
    this.palabrasMostradas = 0;
    this.precargar();
    this.mostrarBotonJugar = true;
    this.mostrarMenuOpciones = false;
    this.mostrarJuego = false;
}
  obtenerTipoSegunOpcion(opcion: number): string{
    switch (opcion) {
      case 1:
        return "Letras";
      case 2:
        return "Silabas";
      case 3:
        return "Consonantes";
      case 4:
        return "Vocales";
      case 5:
        return "Mayusculas"
    }
    return "";
  }
  cambiarMostrarBotonJugar(){
    this.mostrarBotonJugar= !this.mostrarBotonJugar;
    this.mostrarMenuOpciones = !this.mostrarMenuOpciones;
  }
  cambiarMostrarMenuOpciones() {
    if(this.mostrarMenuOpciones){
      this.mostrarMenuOpciones = !this.mostrarMenuOpciones;
      this.mostrarJuego = !this.mostrarJuego;
    }
  }
  mostrarPalabras(){
    console.log("hay : " + this.palabras.length + " palabras en el arreglo");
  }
  mostrarOpcionesDelSet(){
    for (let item of this.valoresPosibles) {
      console.log("Opcion: "+item);
    }
  }
  mostrarModal(){
    if(this.palabrasMostradas === 3){
      this.mostrarMenuOpciones = false;
      this.mostrarBotonJugar = true;
      return true;
    }
    return false
  }
  contarPalabrasAcertadas(){
    let contador = 0;
    for (let [key, value] of this.acertados) {
      if(value === 1){
        contador++;
      }
    }
    return contador;
  }
  contarPalabrasErradas(){
    let contador = 0;
    for (let [key, value] of this.acertados) {
      if(value === 0){
        contador++;
      }
    }
    return contador;
  }


}
