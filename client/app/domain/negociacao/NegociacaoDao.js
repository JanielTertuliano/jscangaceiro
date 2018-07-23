class NegociacaoDao {

    constructor(connection) {

        this._connection = connection;
        this._store = 'negociacoes';

    }

    adiciona(negociacao) {
        
        return new Promise((resolve, reject) => {

            const request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(negociacao);

            request.onsucess = e => resolve();
            request.onerror = e => {

                console.log(e.target.error);
                reject('Não foi possível salvar a negociação');
            }
        });

    }

    listaTodos() {

        return new Promise((resolve, reject) => {

            const negociacoes = [];

            const cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

            cursor.onsucess = e => {

                const atual = e.target.result;

                if (atual) {

                    const negociacao = new NegociacaoDao(
                        atual.value._data,
                        atual.value._quantidade,
                        atual.value._valor);

                    negociacoes.push(negociacao);
                    atual.continue();

                } else {

                    resolve(negociacoes);
                }
            };

            cursor.onerror = e => {

                console.log(e.target.error);
                reject('Não foi possível listar as negociações');
            }

        });

    }
}