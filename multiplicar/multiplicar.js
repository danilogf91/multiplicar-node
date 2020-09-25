// requires

const fs = require('fs');
const colors = require('colors')
const { resolve } = require('path');

let listarTabla = (base, limite = 10) => {
    console.log(`Tabla de ${base}`.green);
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} x ${index} = ${base*index}\n`);    
    }
}


let crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido no ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} x ${index} = ${base*index}\n`;    
        }



        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`,data, (err) => {
        if (err) 
            reject(err);
        else
            resolve(`tabla-${base}-al-${limite}.txt`);        
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}