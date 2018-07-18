class ConnectionFactory {

    construtor() {

        throw new Error('Não é possivel criar instâncias dessa classe');
    }

    static getConnection() {
        return new Promise((resolve, reject) => {
            
        });
    }
}