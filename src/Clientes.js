import Impuesto from "./Impuestos.js";

class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

 
  get nombre() {
    return this._nombre;
  }

  set nombre(valor) {
    this._nombre = valor;
  }

  get impuesto() {
    return this._impuesto;
  }

  set impuesto(valor) {
    this._impuesto = valor;
  }


  calcularImpuesto() {
    const { montoBrutoAnual, deducciones } = this._impuesto;
    return (montoBrutoAnual - deducciones) * 0.21;
  }
}

export default Cliente;
