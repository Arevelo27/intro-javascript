import { getHeroeById2 } from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     const heroe = getHeroeById2(2);
//     resolve(heroe);
//     // reject('No se pudo encontrar el heroe');
//   }, 2000)
// })

// promesa.then((m) => console.log(m)).catch((err) => console.warn(err))

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById2(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el heroe');
      }
    }, 2000)
  })
}

getHeroeByIdAsync(0)
  .then(console.log)
  .catch(console.warn)