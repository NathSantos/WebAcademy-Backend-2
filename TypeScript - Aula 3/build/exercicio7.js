"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Turno;
(function (Turno) {
    Turno["Manh\u00E3"] = "Manh\u00E3";
    Turno["Tarde"] = "Tarde";
    Turno["Noite"] = "Noite";
})(Turno || (Turno = {}));
var Area;
(function (Area) {
    Area["Humanas"] = "Humanas";
    Area["Biol\u00F3gicas"] = "Biol\u00F3gicas";
    Area["Exatas"] = "Exatas";
})(Area || (Area = {}));
function validarTamanhoMinimo(minLength) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
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
    constructor(id, descricao, turno, curso) {
        this.id = id;
        this.descricao = descricao;
        this.turno = turno;
        this.curso = curso;
    }
}
class GerenciadorTurmas {
    constructor() {
        this.turmas = [];
    }
    adicionarTurma(turma) {
        this.turmas.push(turma);
    }
    excluirTurma(id) {
        const index = this.turmas.findIndex((turma) => turma.id === id);
        if (index !== -1) {
            this.turmas.splice(index, 1);
        }
    }
    alterarTurma(id, novaDescricao) {
        const turma = this.turmas.find((turma) => turma.id === id);
        if (turma) {
            turma.descricao = novaDescricao;
        }
    }
    buscarTurma(id) {
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
__decorate([
    validarTamanhoMinimo(10)
], GerenciadorTurmas.prototype, "adicionarTurma", null);
// ============ Exemplo de uso ============
const gerenciador = new GerenciadorTurmas();
const turma1 = new Turma(1, "Turma 1", Turno.Manhã, { descricao: "Curso A", area: Area.Humanas });
gerenciador.adicionarTurma(turma1);
const turma2 = new Turma(2, "Turma 2", Turno.Tarde, { descricao: "Curso B", area: Area.Exatas });
gerenciador.adicionarTurma(turma2);
gerenciador.imprimirTurmas();
// Tentativa de adicionar uma turma com descrição menor que 10 caracteres
const turmaInvalida = new Turma(3, "Turma 3", Turno.Noite, { descricao: "Curso C", area: Area.Biológicas });
gerenciador.adicionarTurma(turmaInvalida);
