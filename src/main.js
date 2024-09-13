import Cliente from './Clientes.js';
import Impuesto from './Impuestos.js';


const impuesto = new Impuesto(1000000, 200000);
const cliente = new Cliente('Empresa XYZ', impuesto);


console.log(`El impuesto total a pagar por ${cliente.nombre} es: ${cliente.calcularImpuesto()}`);
