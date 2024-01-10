const Jogo = require("./jogo");
let prompt = require("prompt-sync")();

class Jogando extends Jogo {
    constructor(jogo) {
        super();
        this.jogo = jogo;
    }

    jogoAcabou() {
        for (let i = 0; i < this.jogo.pais_secreto.length; i++) {
            const letra = this.jogo.pais_secreto[i];
            if (letra !== " " && !this.jogo.letrasCorretas.includes(letra)) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Jogando;