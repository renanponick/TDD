const { describe, expect, it } = require('@jest/globals');
const calculator = require('../src/calculator');

describe('Calculator Tests', () => {
   // Executado antes de TODOS os testes
   beforeAll(async () => {
      console.info('Iniciando TDD com jest!');
   });

   // Executado após TODOS os testes
   afterAll(() => {
      console.info('Encerrados os testes');
   });

   it('Should sum two numbers', () => {
      const result = calculator.sum(1, 2)

      expect(result).toEqual(3)
   })

})
