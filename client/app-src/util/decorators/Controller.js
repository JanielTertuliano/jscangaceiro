export function controller(...seletores) {

    const elemetents = seletores.map(seletor => document.querySelector(seletor));

    return function(constructor) {
        const constructorOriginal = constructor;

        const constructorNovo = function() {

            return new constructorOriginal(...elemetents);
        }

        constructorNovo.prototype = constructorOriginal.prototype;

        return constructorNovo;
    }
}