"use strict";

var _Clientes = _interopRequireDefault(require("./Clientes.js"));
var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var impuesto = new _Impuestos.default(1000000, 200000);
var cliente = new _Clientes.default('Empresa XYZ', impuesto);
console.log("El impuesto total a pagar por ".concat(cliente.nombre, " es: ").concat(cliente.calcularImpuesto()));