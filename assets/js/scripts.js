class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
    }
}

class Consultorio {
    constructor(nombre, pacientes) {
        this.nombre = nombre;
        this.pacientes = pacientes || [];
    }

    //setter
    set setPaciente(paciente) {
        this.pacientes.push(paciente);
    }

    //getter
    get getPacientes() {
        return this.pacientes;
    }

    //método
    buscarPacientePorNombre(nombre) {
        return this.pacientes.find((item) => item.nombre === nombre)
    }
}

let pacienteUno = new Paciente("Rodrigo", 20, "19.523.654-k", "resfrio comun");
let pacienteDos = new Paciente("Daniel", 34, "16.876.612-2", "migraña");
let pacienteTres = new Paciente("Francisca", 37, "15.049.315-4", "hamigdatilis purulenta");
let pacienteCuatro = new Paciente("Roberto", 42, "13.890.586-1", "Gastroenteritis");
let pacienteCinco = new Paciente("Camila", 34, "16.142.836-k", "resfrio comun");

let consultorioUno = new Consultorio("Felix Bulnes");

consultorioUno.setPaciente = pacienteUno;
consultorioUno.setPaciente = pacienteDos;
consultorioUno.setPaciente = pacienteTres;
consultorioUno.setPaciente = pacienteCuatro;
consultorioUno.setPaciente = pacienteCinco;

// cambiando el nombre, edad, rut y diagnóstico del pacienteUno
pacienteUno.nombre = "Rolando"
pacienteUno.edad = 25
pacienteUno.rut = "19.142.623-k"
pacienteUno.diagnostico = "Hematoma"

// Listado completo de pacientes
console.log(consultorioUno.getPacientes)

//Busqueda de la información completa del paciente a través del nombre
console.log(consultorioUno.buscarPacientePorNombre("Rolando"))
