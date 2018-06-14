class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    paraArray() {
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {
        let total = 0;

        this._negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0);

        return total;
    }
}