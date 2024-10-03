// import { heroes } from './data/heroes'
// import { heroes } from './data/heroes'
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log(owners)

// const getHeroeById = (id) =>  heroes.find((heroe) => heroe.id === id);

// const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroeById(3) )
// console.log( getHeroesByOwner('DC') )



export const getHeroeById2 = (id) =>  heroes.find((heroe) => heroe.id === id);

export const getHeroesByOwner2 = (owner) => heroes.filter((heroe) => heroe.owner === owner);