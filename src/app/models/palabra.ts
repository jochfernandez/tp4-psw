export class Palabra {
  private _palabra: string;
  private _letras: number;
  private _vocales: number;
  private _consonantes: number;
  private _silabas: number;

  constructor(palabra: string) {
    this._palabra = palabra;
    this._letras = palabra.length;
    this._vocales = this.calcularVocales();
    this._consonantes = this.calcularConsonantes();
    this._silabas = this.calcularSilabas();
  }


  get palabra(): string {
    return this._palabra;
  }

  set palabra(value: string) {
    this._palabra = value;
  }

  get letras(): number {
    return this._letras;
  }

  set letras(value: number) {
    this._letras = value;
  }

  get vocales(): number {
    return this._vocales;
  }

  set vocales(value: number) {
    this._vocales = value;
  }

  get consonantes(): number {
    return this._consonantes;
  }

  set consonantes(value: number) {
    this._consonantes = value;
  }

  get silabas(): number {
    return this._silabas;
  }

  set silabas(value: number) {
    this._silabas = value;
  }

  private calcularVocales() {
    let vocales = 0;
    for (let letra of this._palabra) {
      if (letra.match(/[aeiouáéíóúü]/i)) {
        vocales++;
      }
    }
    return vocales;
  }
  private calcularConsonantes() {
    let consonantes = 0;
    for (let letra of this._palabra) {
      if (letra.match(/[bcdfghjklmnñpqrstvwxyz]/i)) {
        consonantes++;
      }
    }
    return consonantes;
  }
  private calcularSilabas() {
    let silabas = 0;
    let palabra = this._palabra.toLowerCase();
    let ultimaLetra = "";
    for (let letra of palabra) {
      if (letra.match(/[aeiouáéíóúü]/i) && !ultimaLetra.match(/[aeiouáéíóúü]/i)) {
        silabas++;
      }
      ultimaLetra = letra;
    }
    return silabas;
  }
}
