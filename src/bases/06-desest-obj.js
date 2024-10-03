// Desestructuración de Objetos

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    calle: 'Primera',
    pais: 'Estados Unidos',
    ciudad: 'New York'
  }
};

const { nombre, apellido, ...resto } = persona;

console.log({ nombre, apellido, resto })

const useContext = ({ nombre, apellido, rango = 'Capitan', clave }) => {
  // console.log(nombre, apellido, rango)

  return {
    nombreClave: clave,
    anios: 45,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
  }
}

// eslint-disable-next-line no-undef, react-hooks/rules-of-hooks
const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona)
console.log({ nombreClave, anios })
console.log(lat, lng)