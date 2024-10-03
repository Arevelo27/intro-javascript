const nombre = 'Andres';
const apellido = 'Castillo';

const nombreCompleto = `${nombre} ${apellido}`;


console.log('Hola mundo', nombreCompleto);

const getSaludo = (nombre) => {
  return 'Hola mundo ' + nombre;
}

console.log(`Este es un texto: ${getSaludo( nombre )}`)