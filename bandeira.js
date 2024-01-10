const Jogo = require("./jogo");
let prompt = require("prompt-sync")();

class ExibirBandeira extends Jogo {
    constructor(jogo) {
        super();
        this.jogo = jogo;
        this.bandeira = [
            " _______",
            "|       |",
            "|       |",
            "|       |",
            "|_______|"
        ];
    }

    mostrarBandeira() {
        const erros = this.jogo.letrasErradas.length;

        if (erros === 1) {
            this.bandeira[1] = "| X     |";
        } else if (erros === 2) {
            this.bandeira[1] = "| X     |";
            this.bandeira[2] = "|       |";
            this.bandeira[3] = "| X     |";
        } else if (erros === 3) {
            this.bandeira[1] = "| X   X |";
            this.bandeira[2] = "|       |";
            this.bandeira[3] = "| X     |";
        } else if (erros === 4) {
            this.bandeira[1] = "| X   X |";
            this.bandeira[2] = "|       |";
            this.bandeira[3] = "| X   X |";
        } else if (erros === 5) {
            this.bandeira[1] = "| X   X |";
            this.bandeira[2] = "|   X   |";
            this.bandeira[3] = "| X   X |";
        }

        return this.bandeira.join("\n");
    }
}

module.exports = ExibirBandeira;