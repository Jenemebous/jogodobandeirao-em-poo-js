const Jogo = require("./jogo");
let prompt = require("prompt-sync")();

class Exibir extends Jogo {
    constructor(jogo) {
        super();
        this.jogo = jogo;
    }

    mostrarPais() {
        let pExibida = "";
        for (let i = 0; i < this.jogo.pais_secreto.length; i++) {
            const letra = this.jogo.pais_secreto[i];
            if (letra === " " || this.jogo.letrasCorretas.includes(letra)) {
                pExibida += letra + " ";
            } else {
                pExibida += "._.";
            }
        }
        return pExibida;
    }
}

module.exports = Exibir;