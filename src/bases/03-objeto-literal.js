const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion:{
        ciudad: 'new york',
        zip: 88888888,
        lat: 34.333,
        lng: 23.222222
    }
};

const persona2 = { ...persona};

persona2.nombre = 'peter';

console.log(persona);
console.log(persona2);