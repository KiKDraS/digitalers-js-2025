//document.getElementById("id-del-elemento-html") -> Herramienta de JS para interactuar con los elementos del HTML
//console.log(cosa-a-mostrar) -> Herramienta de JS que permite ver cosas en la consola de las herramientas del desarrollador del navegador
console.log(document.getElementById("titulo")); //Sentencia (oración)
//Mostrame en la consola el elemento con el id="titulo"
console.log();

/*
    variable - Espacio de memoria que almacena datos que pueden cambiar a lo largo de la ejecución del Programa*
        => Nomenclatura (reglas para nombrar)
            -> Los nombres deben comenzar con letras, $ o _
            -> No pueden empezar con números
            -> No pueden tener espacios
            -> Solo pueden tener letras, números, $ y _
            -> Son key sensitive
                -> otracosa es distinto de otraCosa
            -> No pueden ser palabras reservadas**
            -> Los nombres DEBEN ser descriptivos  
            -> Es JS  
                -> Por convención utilizamos camelCase

        Convenciones de formato de escritura
            -> camelCase
            -> PascalCase
            -> snake_case
            -> UPPER_SNAKE_CASE
            -> kebab-case (solo CSS)    


    * ejecución del Programa -> Lá máquina realiza las acciones que escribimos con nuestro Lenguaje
    ** Palabra reservada -> Son palabras que no podemos usar por que en el Lenguaje significan algo
        -> var - En JS significa "declarar variable"
        -> let - En JS significa "declarar variable en bloque"
        -> const - En JS significa "declarar variable que no puede ser reasignada"
        -> typeof - En JS significa "quiero conocer el tipo de dato de la variable"
*/

// Declarar una variable - Sentencia (oración) que le indica al Navegador que queremos crear una caja en la memoria para guardar cosas
var unaVariable;

// Asignar un valor a la variable - Sentencia (oración) que le indica al Navegador que quier guardar algo dentro de la caja
unaVariable = "Hola, mundo!";

// Declarar y asignar en una sola sentencia
var otraVariable = "Otra cosa";

/*
    Dato - Elemento representativo que tiene un significado de uso
    
    Tipos de Dato
        => number - Representa números para propósitos matemáticos (1, 1.5, -50, etc)
        => string - Representa texto ("hora", "a", "un párrafo elaborado", "1")
            -> ""/'' indico que voy a generar un dato de tipo string
        => boolean - Representa verdadero/falso
        => undefined - Variable declarada que no tiene valor asignado
        => null - Variable declarada que TIENE tipo de dato pero no tiene valor
            -> En JS, null suele venir de la mano de un error

    Las variables son pensadas en relación al Tipo de Dato que almacenan  
        -> Tengo una variable de tipo number si guarda un dato de tipo number  
        -> En JS el Tipo de Dato de una variable se obtiene al momento en que se le asigna un valor*
        -> Todas las variables tienen Tipo de Dato

    * Valor que asigno === Elemento que guardo en la caja    
*/

// Int miNum; -> En Java (fuertemente tipado), voy a crear una variable de tipo Int (number)

var miNum; // La variable no tiene valor asignado
console.log("Valor: " + miNum + " - Tipo de Dato: " + typeof miNum);
miNum = 1; // Asigno un valor de Tipo number
console.log("Valor: " + miNum + " - Tipo de Dato: " + typeof miNum);

var unString = "Hola, mundo!"; // '' | ""
console.log("Valor: " + unString + " - Tipo de Dato: " + typeof unString);

var otroString = 'Mi "mundo"';
console.log("Valor: " + otroString + " - Tipo de Dato: " + typeof otroString);
otroString = "Mi 'mundo'";
console.log("Valor: " + otroString + " - Tipo de Dato: " + typeof otroString);

var unBoolean = true;
console.log("Valor: " + unBoolean + " - Tipo de Dato: " + typeof unBoolean);
unBoolean = false;
console.log("Valor: " + unBoolean + " - Tipo de Dato: " + typeof unBoolean);

/*
    1.- Declaro la variable unTitulo
    2.- Le pido al navegador que vaya al HTML y busque el elemento con el id="unTitulo"
        -> Un elemento HTML en JS tiene Tipo de Dato
    3.- Asigno ese elemento a la variable unTitulo
*/
var unTitulo = document.getElementById("unTitulo");
console.log("Valor: " + unTitulo + " - Tipo de Dato: " + typeof unTitulo);
