// Funciones en JS
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
  }
  
  const saludar2 =  (nombre) => {
    return`Hola, ${nombre}`
  }
  
  const saludar3 = (nombre) => `Hola, ${nombre}`
  
  const saludar4 = () => `Hola mundo`
  
  console.log(saludar('Goku'));
  console.log(saludar2('Vegeta'));
  console.log(saludar3('Trunks'));
  console.log(saludar4('Gohan'));
  
  const getUser = () => {
    return {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
  }
  
  // El return de este es un objeto
  const getUser2 = () => ({
      uid: 'ABC123',
      username: 'El_Papi1502'
  })
  
  console.log(getUser)
  console.log(getUser2)
  
  const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
  })
  
  const usuarioActivo = getUsuarioActivo('Fernando')
  console.log({usuarioActivo})