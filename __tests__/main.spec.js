import { verificaFizz, verificaBuzz } from '../src/main'

describe('Teste de Fizz Buzz', () => {

    it('Verifica se o número 3 é Fizz', () => {
        expect(verificaFizz(3)).toBe('Fizz');
    });

});