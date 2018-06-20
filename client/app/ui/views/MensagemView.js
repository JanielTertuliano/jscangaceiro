class MensagemView {
    constructor(selector) {
        this._elemento = document.querySelector(selector);
    }

    template(model) {
        return `<p class="alert alert-info">${model.texto}</p>`;
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}