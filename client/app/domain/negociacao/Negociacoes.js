class Negociacoes {
    constructor(armadilha) {
        this._negociacoes = [];

        Object.freeze(this);
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    paraArray() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes.length = 0;
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0);
    }

    set texto(texto) {
        this._texto = texto;
    }
}