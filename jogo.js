
let prompt = require("prompt-sync")();

class Jogo {
    constructor() {
        this.paises = ["ALEMANHA", "NIGERIA", "BRASIL", "JAPAO"];
        this.pais_secreto = this.selecionarPais();
        this.letrasCorretas = [];
        this.letrasErradas = [];
        this.maxTentativas = 5;
    }

    selecionarPais() {
        const indice = Math.floor(Math.random() * this.paises.length);
        return this.paises[indice];
    }

    adivinhar(letra) {
        if (this.pais_secreto.includes(letra)) {
            this.letrasCorretas.push(letra);
            return true;
        } else {
            this.letrasErradas.push(letra);
            return false;
        }
    }

    jogoAcabou() {
        for (let i = 0; i < this.pais_secreto.length; i++) {
            const letra = this.pais_secreto[i];
            if (letra !== " " && !this.letrasCorretas.includes(letra)) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Jogo;