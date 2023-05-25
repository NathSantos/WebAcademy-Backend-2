enum Turno {
    Manhã = "Manhã",
    Tarde = "Tarde",
    Noite = "Noite",
}
  
enum Area {
    Humanas = "Humanas",
    Biológicas = "Biológicas",
    Exatas = "Exatas",
}

function validarTamanhoMinimo(minLength: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
    
        descriptor.value = function (...args: any[]) {
            const description = args[0];

            if (description.length < minLength) {
                throw new Error("A descrição deve ter pelo menos 10 caracteres.");
            }
    
            return originalMethod.apply(this, args);
        };
    
        return descriptor;
    };
}
  
class Turma {
    readonly id: number;
    descricao: string;
    turno: Turno;
    curso: {
        descricao: string;
        area: Area;
    };

    constructor(id: number, descricao: string, turno: Turno, curso: { descricao: string; area: Area }) {
        this.id = id;
        this.descricao = descricao;
        this.turno = turno;
        this.curso = curso;
    }
}
  
class GerenciadorTurmas {
    private turmas: Turma[];

    constructor() {
        this.turmas = [];
    }

    @validarTamanhoMinimo(10)
    adicionarTurma(turma: Turma) {
        this.turmas.push(turma);
    }

    excluirTurma(id: number) {
        const index = this.turmas.findIndex((turma) => turma.id === id);
        if (index !== -1) {
            this.turmas.splice(index, 1);
        }
    }

    alterarTurma(id: number, novaDescricao: string) {
        const turma = this.turmas.find((turma) => turma.id === id);
        if (turma) {
            turma.descricao = novaDescricao;
        }
    }

    buscarTurma(id: number) {
        return this.turmas.find((turma) => turma.id === id);
    }

    imprimirTurmas() {
        this.turmas.forEach((turma) => {
            console.log(`ID: ${turma.id}`);
            console.log(`Descrição: ${turma.descricao}`);
            console.log(`Turno: ${turma.turno}`);
            console.log(`Curso: ${turma.curso.descricao}`);
            console.log(`Área: ${turma.curso.area}`);
            console.log("-----------------------");
        });
    }
}
  
// ============ Exemplo de uso ============

const gerenciador = new GerenciadorTurmas();

const turma1 = new Turma(1, "Turma 1", Turno.Manhã, {descricao: "Curso A", area: Area.Humanas});

gerenciador.adicionarTurma(turma1);

const turma2 = new Turma(2, "Turma 2", Turno.Tarde, {descricao: "Curso B", area: Area.Exatas});

gerenciador.adicionarTurma(turma2);

gerenciador.imprimirTurmas();

// Tentativa de adicionar uma turma com descrição menor que 10 caracteres

const turmaInvalida = new Turma(3, "Turma 3", Turno.Noite, {descricao: "Curso C",area: Area.Biológicas});

gerenciador.adicionarTurma(turmaInvalida);
  