namespace Clase32;

class Program
{
    static void Main(string[] args)
    {
        /*
            Paradigma de Programación Orientada a Objetos       
            -> El paradigma de programación orientada a objetos plantea que todo sistema o proceso informático puede modelarse con Objetos que se encuentren vivos en algún tipo de Ambiente y se relacionan con otros Objetos enviando y recibiendo Mensajes.
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
                    -> Polimorfismo - Permite que un mismo nombre de Método signifique cosas distintas
                        -> Sobrecarga de Herencia - En la Clase heredera, volvemos a escribir un método para modificar la funcionalidad
                        -> Sobrecarga de Método - Escribir el mismo Método más de una vez, pasándole parámetros distintos
                        -> Sobrecarga de Constructor - Escribir el mismo Constructor más de una vez, pasándole parámetros distintos

            Relación entre Objetos
                -> ¿Quién contiene? o ¿A quién le interesa? tal información
                -> Simple - En la Clase, declaro un Atributo que contenga un único dato del mismo tipo de Clase
                -> Múltiple - En la Clase, declaro un Atributo que contenga varios datos de un mismo tipo de Clase   

            Clase Abstracta
                -> Idea que se comparte en todo nuestro Modelo
                -> Clase que NO PUEDE ser instanciada
                -> Clase que se usa para INICIAR un Árbol de Clases   

            Interface
                -> Estructura de elementos que DEBEN ser declarados en más de una Clase, pero esas Clases NO PUEDEN conectarse por Árbol de Herencia de Clases  

            Clase Sellada
                -> Idea final
                -> Clase que NO PUEDE ser Heredada
                -> Clase que se para CERRAR un Árbol de Clases            
        */

        Espada espada = new();
        espada.Herir();
        espada.Herir(10);

        Baston baston = new();
        baston.Herir();

        Orco orco = new("Pepe");

        List<Arma> armas = new();
        armas.Add(baston);

        orco.EquiparArmas(armas);

        Clerigo clerigo = new("Pepin");


    }
}

abstract class Personaje
{
    private string nombre;
    protected int life;
    protected Armadura armadura;
    protected List<Arma> armas;

    // Constructor === Se encarga de crear el objeto utilizando lo que se escribió en la Clase. Si tengo que hacer alguna aclaración de creación, lo escribo
    public Personaje(string nombre)
    {
        //this === Este objeto concreto
        this.nombre = nombre;
    }

    // public Personaje(string nombre, int life)
    // {
    //     //this === Este objeto concreto
    //     this.nombre = nombre;
    //     this.life = life;
    // }

    public void Moverse()
    {
        Console.WriteLine("El personaje se mueve 2 espacios");
    }

    public abstract void EquiparArmadura(Armadura armadura);

    public abstract void EquiparArmas(List<Arma> armas);

    public void Atacar()
    {
        armas.ForEach(arma =>
        {
            arma.Herir();
        });
    }

}

class Orco : Personaje, Luchador
{
    public Orco(string nombre) : base(nombre)
    {
        this.life = 20;
    }
    // public Orco(string nombre, int life) : base(nombre, life)
    // {
    // }

    public override void EquiparArmadura(Armadura armadura)
    {
        this.armadura = armadura;
    }

    public override void EquiparArmas(List<Arma> armas)
    {
        armas.ForEach(arma =>
        {
            if (arma is Espada)
            {
                this.armas.Add(arma);
                Console.WriteLine("Espada equipada");
            }
            else Console.WriteLine("Los orcos solo pueden equipar Espadas");
        });
    }

    public void Pelear()
    {
        Console.WriteLine("El orco está peleando");
    }
}

class Clerigo : Personaje, Sanador
{
    public Clerigo(string nombre) : base(nombre)
    {
        this.life = 15;
    }

    // public Clerigo(string nombre, int life) : base(nombre, life)
    // {
    // }

    public override void EquiparArmadura(Armadura armadura)
    {
        this.armadura = armadura;
    }

    public override void EquiparArmas(List<Arma> armas)
    {
        armas.ForEach(arma =>
        {
            if (arma is Baston)
            {
                this.armas.Add(arma);
                Console.WriteLine("Batón equipada");
            }
            else Console.WriteLine("Los clérigos solo pueden equipar Bastones");
        });
    }

    public void Sanar()
    {
        Console.WriteLine("El clerigo está sanando");
    }
}

class Enano : Personaje
{
    public Enano(string nombre) : base(nombre)
    {
        this.life = 25;
    }

    // public Enano(string nombre, int life) : base(nombre, life)
    // {
    // }

    public override void EquiparArmadura(Armadura armadura)
    {
        this.armadura = armadura;
    }

    public override void EquiparArmas(List<Arma> armas)
    {
        armas.ForEach(arma =>
        {
            if (arma is Hacha)
            {
                this.armas.Add(arma);
                Console.WriteLine("Hacha equipada");
            }
            else Console.WriteLine("Los enanos solo pueden equipar Hachas");
        });
    }
}

sealed class Forjador : Enano
{
    public Forjador(string nombre) : base(nombre)
    {
    }

    public void CrearArma()
    {
        Console.WriteLine("El enano forjador crea un arma");
    }
}

sealed class Paladin : Enano, Sanador
{
    public Paladin(string nombre) : base(nombre)
    {
    }

    public void Sanar()
    {
        Console.WriteLine("El paladin está sanando");
    }
}

class Armadura : Durabilidad
{
    public int durabilidad { get; set; }

    public void PerderDurabilidad()
    {
        durabilidad -= 5;
        Console.WriteLine($"Durabilidad del armadura reducida. Valor actual: {durabilidad}");
    }
}

abstract class Arma : Durabilidad
{
    public int durabilidad { get; set; }

    // Método abstracto - Se utiliza en las Clases Abstractas para indicar que las Clases Herederas DEBEN declarar cómo realizar la acción
    public abstract void Herir();

    public abstract void Herir(int modificador);
    
    public void PerderDurabilidad()
    {
        durabilidad -= 10;
        Console.WriteLine($"Durabilidad del armadura reducida. Valor actual: {durabilidad}");
    }
}

class Espada : Arma
{
    public override void Herir()
    {
        Console.WriteLine("Soy una Espada hiriendo");
    }

    public override void Herir(int modificador)
    {
        Console.WriteLine($"Soy una Espada hiriendo con el modificador: +{modificador}");
    }
}

// class EspadaCorta : Espada
// {
    
// }

class Baston : Arma
{
    public override void Herir()
    {
        Console.WriteLine("Soy una Bastón hiriendo");
    }

    public override void Herir(int modificador)
    {
        Console.WriteLine($"Soy una Bastón hiriendo con el modificador: +{modificador}");
    }
}

class Hacha : Arma
{
    public override void Herir()
    {
        Console.WriteLine("Soy una Hacha hiriendo");
    }

    public override void Herir(int modificador)
    {
        Console.WriteLine($"Soy una Hacha hiriendo con el modificador: +{modificador}");
    }
}

interface Durabilidad
{
    // { get; set; } -> Forma moderna de aplicar Getters y Setters
    public int durabilidad { get; set; }

    public void PerderDurabilidad();
}

interface Luchador
{
    public void Pelear();
}

interface Sanador
{
    public void Sanar();
}