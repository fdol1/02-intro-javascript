const nombre = 'Fernando';
const apellido = 'pineda';

const nombreCompleto = `${nombre} ${apellido}` ;

console.log(nombreCompleto);

function getSaludo(nombre){
    return `hola ${nombre}`;
}

console.log(`${getSaludo(nombre)}`)
