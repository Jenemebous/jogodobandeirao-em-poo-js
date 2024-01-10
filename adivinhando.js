const Jogo = require("./jogo");
let prompt = require("prompt-sync")();

class Adivinhando extends Jogo {
    constructor(jogo) {
        super();
        this.jogo = jogo;
    }

    adivinhar(letra) {
        if (this.jogo.pais_secreto.includes(letra)) {
            this.jogo.letrasCorretas.push(letra);
            return true;
        } else {
            this.jogo.letrasErradas.push(letra);
            return false;
        }
    }
}

module.exports = Adivinhando;