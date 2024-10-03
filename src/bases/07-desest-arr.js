// Desestructuración de Arreglos

const personajes = ['Goku', 'Saitama', 'Vegeta', 'Trunks'];
const [p1, p2, p3, p4] = personajes;

console.log({ p1, p2, p3, p4 })

const retornarArreglo = () => {
  return ['ABC', 123];
}; 

const [letras, numeros] = retornarArreglo();
console.log({ letras, numeros })

const useState = (valor) => {
  return [valor, () => { console.log('Hola Mundo') }]
} ;

// eslint-disable-next-line no-undef, react-hooks/rules-of-hooks
const [nombre, setNombre] = useState('Goku');

setNombre();