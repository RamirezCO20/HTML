// Clase Padre
class Especie {
    constructor(nombre, genero, edad){
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
    }
  
    aumentarEdad (edad) {
        this.edad += edad;
    }

    saludar () {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}

// Clase Hija
class Humano extends Especie {
    constructor(nombre, genero, edad){
        super(nombre, genero, edad);
        this.hobbies = [];
    }

    agregarHobbies(hobbie){
        this.hobbies.push(hobbie);
    }
}

// Instancias
const alejandro = new Humano ('Alejandro', 'Masculino', 20);
const jason = new Humano ('Jason', 'Masculino', 77);

/* Esta función flecha le pide al usuario que ingrese tres hobbies
que luego anexara al respectivo humano,
se debe tener en cuenta que la función pide un parametro, 
ahí debe ser ingresado el nombre de una instancia creada. */
const anexarDatos = (humano) => {
    alert(`Bienvenido ${humano.nombre}, a continuación le pediremos ingresar tres hobbies.`);
    for (let i = 0; i < 3; i++) {
        humano.agregarHobbies(prompt('Ingrese un hobbie: '));
    }
}