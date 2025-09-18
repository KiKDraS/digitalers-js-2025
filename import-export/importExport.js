/*
    import/export

    export - Para permitir que otros archivos usen los datos/funciones que contienen el archivo en que se escribe el export
        -> export default 
            -> Exportar valor sin otorgar nombre a la variable. Al importar se puede cambiar el nombre
            -> Solo puede haber un export default por archivo
        -> export
            -> Exportar valor otorgando nombre a la variable. Al importar TENGO que respetar el nombre
            -> Puede haber multiples export en un mismo archivo
            -> Todos los valores exportados con export se guardan en un objeto plano

    import - Para traer los datos/funciones que fueron exportados
        -> export default
            -> import nombreNuevoDeVariable from [ruta-relativa-al-archivo-js]
        -> export
            -> import { nombreDeVariableDelExport } from [ruta-relativa-al-archivo-js]
*/

export const sumar = (num1, num2) => num1 + num2;

export const restar = (num1, num2) => num1 - num2;

// export default restar;

export default function saludar() {
  console.log("hola");
}

// export default {
//   sumar,
//   restar,
// };
