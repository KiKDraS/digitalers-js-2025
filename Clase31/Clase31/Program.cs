namespace Clase31;

class Program
{
    static void Main(string[] args)
    {

        /*
            C# -> Lenguaje fuertemente tipado con tipado estático
        

        string datoString = "Dato de tipo string";
        int numEntero = 10;
        double numDecimal = 10.0;
        List<string> nombres = new List<string>()
        {
            "Pepe", "Pepa", "Pepin"
         };
        // List<string> nombres = [];
        nombres.Add("Juan");
        nombres.ForEach((nombre) => Console.WriteLine($"Hola, soy {nombre}"));
        nombres.Remove("Juan");
        nombres.ForEach((nombre) => Console.WriteLine($"Hola, soy {nombre}"));
        */


        /*
            Todo Acto de Programación Responde
                -> ¿Qué necesito?
                -> ¿Cuándo lo necesito?
                -> ¿Cómo puedo obtenerlo?


            Paradigma de Programación Orientada a Objetos
                -> El paradigma de programación orientada a objetos plantea que todo sistema o proceso informático puede modelarse con Objetos que se encuentren vivos en algún tipo de Ambiente y se relacionan con otros Objetos enviando y recibiendo Mensajes.Es decir, programar bajo este paradigma, implica que nuestros programas, deberán ser pensados sólo con objetos y mensajes.   
                -> Diagramas UML
                    -> "Mapa de Clases" que muestra como las distintas Clases interactúan entre si.         
                -> 4 Pilares
                    -> Abstracción - Se utilizan para pensar qué capacidades tiene que tener una Clase
                    -> Herencia - Se utiliza para no repetir código innecesario
                    -> Encapsulamiento - Una Clase no debe permitir modificaciones por fuera de la misma
                        -> Modificadores de visibilidad
                            -> public - Cualquiera puede usar el dato
                            -> private - Solo la Clase puede utilizar el dato
                            -> protected - Sola la Clase y sus Clases herederas pueden usar/modificar el valor
                        -> Getters - Métodos public que permiten que otras Clases lean el valor almacenado en la propiedad private
                        -> Setters - Métodos public que permiten que otras Clases soliciten la modificación de un valor private  
                    -> Polimorfismo
                -> Clase - Modelo sobre el que se crean los Objetos
                    -> Atributos (variables)
                    -> Métodos (funciones)
                    -> Son tipos de dato
                -> Objeto - Instancia de una Clase
                    -> new - Palabra reservada que se utiliza para crear una instancia

            this === Objeto que se está ejecutando        
        */

        // new() -> "Arranco la obra del edificio"
        EmpleadoBancario empleadoBancario = new(1, "Pepe", 123456789);
        empleadoBancario.Fichar();
        // Console.WriteLine(empleadoBancario.id);
        Console.WriteLine(empleadoBancario.GetNombre());

        // new() -> "Arranco la obra del edificio"
        EmpleadoBancario empleadoBancario1 = new(2, "Pepa", 789456123);
        // Console.WriteLine(empleadoBancario1.id);
    }
}

class EmpleadoBancario
{
    // Atributos
    protected int id;
    private string nombre;
    private int dni;

    // Constructor 
    public EmpleadoBancario(int id, string nombre, int dni)
    {
        this.nombre = nombre;
        this.id = id;
        this.dni = dni;
    }

    /*
        Getter
    */
    public string GetNombre()
    {
        return this.nombre;
        // return nombre;
    }

    /*
        Setter
    */
    public void SetNombre(string nombre)
    {
        this.nombre = nombre;
    }

    public void Fichar()
    {
        Console.WriteLine($"Soy, {nombre}. Estoy fichando");
    }

    public void ReportarIncidencia()
    {
        Console.WriteLine($"Soy, {nombre}. Mi identificación de empleado es {id}. Quiero reportar una incidencia");
    }
}

class Cajero : EmpleadoBancario
{

    private string loginCaja;

    public Cajero(int id, string nombre, int dni) : base(id, nombre, dni)
    {
        loginCaja = "Soy un valor random de login";
    }

    public void AtenderCliente()
    {
        Console.WriteLine($"Soy, ${this.GetNombre()}. Estoy atendiendo al cliente");
    }

    public void SolicitarCambioNombre()
    {
        Console.WriteLine($"Quiero que cambien mi nombre. Mi id es {this.id}");
    }
}

class Administrativo : EmpleadoBancario
{
    public Administrativo(int id, string nombre, int dni) : base(id, nombre, dni)
    {
    }
}

class AyudanteCajero : Cajero
{
    public AyudanteCajero(int id, string nombre, int dni) : base(id, nombre, dni)
    {
    }

    public void SolicitarAccesoCaja()
    {
        Console.WriteLine($"Soy el ayudante de cajero con id: {this.id}. Solicito acceso a caja");
    }
}