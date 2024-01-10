let prompt = require("prompt-sync")();
const Jogo = require("./jogo");
const ExibirBandeira = require("./bandeira");
const Jogando = require("./jogando");
const Exibir = require("./exibir");
const Adivinhando = require("./adivinhando");

class Jogar {
    constructor() {
        this.jogo = new Jogo();
        this.exibir = new Exibir(this.jogo);
        this.adivinhando = new Adivinhando(this.jogo);
        this.jogando = new Jogando(this.jogo);
        this.exibirBandeira = new ExibirBandeira(this.jogo);
    }

    jogar() {
        console.log("-------------------------")
        console.log("Bem-vindo ao jogo de adivinhação de países de Ana!");
        console.log("-------------------------")
        console.log("Tente, adivinhe o país: ");
        console.log(this.exibir.mostrarPais());
        console.log("-------------------------")
        console.log("Bandeirão dos erros: ");
        console.log(this.exibirBandeira.mostrarBandeira());
        console.log("-------------------------")

        while (!this.jogando.jogoAcabou() && this.jogo.letrasErradas.length < this.jogo.maxTentativas) {
            const input = prompt("Digite uma letra:").toUpperCase();
            console.log("-------------------------")
            if (input.length !== 1 || !input.match(/[A-Z]/)) {
                console.log("Por favor, insira uma única letra válida.");
                console.log("-------------------------")
                continue;
            }

            if (this.adivinhando.adivinhar(input)) {
                console.log("Letra correta!");
                console.log("-------------------------")
            } else {
                console.log("Letra " + input + " não está na palavra.")
                console.log("-------------------------")
                console.log("Bandeira: ");
                console.log("-------------------------")
                console.log(this.exibirBandeira.mostrarBandeira());
                console.log("-------------------------")
            }

            console.log("País: " + this.exibir.mostrarPais());
            console.log("-------------------------")
            console.log("Tentativas restantes: " + (this.jogo.maxTentativas - this.jogo.letrasErradas.length));
            console.log("-------------------------")
        }

        if (this.jogando.jogoAcabou()) {
            console.log("Parabéns! Você adivinhou o país corretamente!");
            console.log("-------------------------")
        } else {
            console.log("Você excedeu o número máximo de tentativas para descobrir o país. O país era: " + this.jogo.pais_secreto);
            console.log("-------------------------")
        }
    }
}

const jogo = new Jogar();
jogo.jogar(); 