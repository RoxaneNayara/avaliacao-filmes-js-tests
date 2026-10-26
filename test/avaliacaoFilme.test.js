import assert from 'node:assert/strict'
import { avaliarFilmes } from '../source/avaliacaoFilmes.js'

describe('Avaliação de Filmes - Partição de Equivalência', () => {
    it('CT01 - Deve classificar o filme como recomendado', () => {
        const filmes = [
            {
                nome: 'Minha mãe é uma peça',
                avaliacoes: [5, 4, 4, 4, 5]
            }
        ];

        const resultadoEsperado = [
            {
                nome: 'Minha mãe é uma peça',
                quantidadePessoas: 5,
                media: 4.4,
                classificacao: 'Filme recomendado'
            }
        ];

        const resultadoObtido = avaliarFilmes(filmes);

        assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    });

    it('CT02 - Deve classificar o filme como razoável', () => {
        const filmes = [
            {
                nome: 'Saneamento Básico',
                avaliacoes: [3, 4, 2, 3, 4]
            }
        ];

        const resultadoEsperado = [
            {
                nome: 'Saneamento Básico',
                quantidadePessoas: 5,
                media: 3.2,
                classificacao: 'Filme razoável'
            }
        ];

        const resultadoObtido = avaliarFilmes(filmes);

        assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    });

    it('CT03 - Deve classificar o filme como ruim', () => {
        const filmes = [
            {
                nome: 'Se eu fosse você',
                avaliacoes: [1, 2, 3]
            }
        ];

        const resultadoEsperado = [
            {
                nome: 'Se eu fosse você',
                quantidadePessoas: 3,
                media: 2,
                classificacao: 'Filme ruim'
            }
        ];

        const resultadoObtido = avaliarFilmes(filmes);

        assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    })

});

describe('Avaliação de Filmes - Análise de Valor-Limite', () => {

    it('CT04 - Deve classificar como recomendado no limite 4', () => {
        const filmes = [
            {
                nome: 'Homem-Aranha - De Volta Pra Casa',
                avaliacoes: [4, 4, 4]
            }
        ];

        const resultadoEsperado = [
            {
                nome: 'Homem-Aranha - De Volta Pra Casa',
                quantidadePessoas: 3,
                media: 4,
                classificacao: 'Filme recomendado'
            }
        ];

        const resultadoObtido = avaliarFilmes(filmes);

        assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    });

    it('CT05 - Deve classificar como razoável abaixo de 4', () => {
        const filmes = [
            {
                nome: 'Carrie, a Estranha',
                avaliacoes: [4, 4, 4, 4, 3]
            }
        ];

        const resultadoEsperado = [
            {
                nome: 'Carrie, a Estranha',
                quantidadePessoas: 5,
                media: 3.8,
                classificacao: 'Filme razoável'
            }
        ];

        const resultadoObtido = avaliarFilmes(filmes);

        assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    });

    it('CT06 - Deve classificar como razoável no limite 3', () => {
        const filmes = [
            {
                nome: 'Olhos Famintos',
                avaliacoes: [3, 3, 3]
            }
        ];

        const resultadoEsperado = [
            {
                nome: 'Olhos Famintos',
                quantidadePessoas: 3,
                media: 3,
                classificacao: 'Filme razoável'
            }
        ];

        const resultadoObtido = avaliarFilmes(filmes);

        assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    });

    it('CT07 - Deve classificar como ruim abaixo de 3', () => {
        const filmes = [
            {
                nome: 'Todo Mundo Em Pânico',
                avaliacoes: [3, 3, 3, 3, 2]
            }
        ];

        const resultadoEsperado = [
            {
                nome: 'Todo Mundo Em Pânico',
                quantidadePessoas: 5,
                media: 2.8,
                classificacao: 'Filme ruim'
            }
        ];

        const resultadoObtido = avaliarFilmes(filmes);

        assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    });

});

describe('Avaliação de Filmes - Testes Negativos', () => {
    it('CT08 - Deve rejeitar filme sem avaliações', () => {
        const filmes = [
            {
                nome: 'Stars Wars',
                avaliacoes: []
            }
        ];

        assert.throws(() => {
            avaliarFilmes(filmes);
        }, /O filme deve possuir avaliações/);
    });

    it('CT09 - Deve rejeitar avaliações nulas', () => {
        const filmes = [
            {
                nome: 'Cartas para Julieta',
                avaliacoes: null
            }
        ];

        assert.throws(() => {
            avaliarFilmes(filmes);
        }, /Avaliações inválidas/);
    });

    it('CT10 - Deve rejeitar avaliações em formato incorreto', () => {
        const filmes = [
            {
                nome: 'A Identidade Bourne',
                avaliacoes: "5,4,3"
            }
        ];

        assert.throws(() => {
            avaliarFilmes(filmes);
        }, /Avaliações inválidas/);
    });

    it('CT11 - Deve rejeitar nota não numérica', () => {
        const filmes = [
            {
                nome: 'Prometheus',
                avaliacoes: [5, "abc", 3]
            }
        ];

        assert.throws(() => {
            avaliarFilmes(filmes);
        }, /Nota inválida/);
    });

    it('CT12 - Deve rejeitar nota negativa', () => {
        const filmes = [
            {
                nome: 'A Fantástica Fábrica de Chocolate',
                avaliacoes: [5, -2, 3]
            }
        ];

        assert.throws(() => {
            avaliarFilmes(filmes);
        }, /Nota inválida/);
    });

    it('CT13 - Deve rejeitar nota abaixo do limite mínimo 1', () => {
        const filmes = [
            {
                nome: 'Jurassic Park',
                avaliacoes: [1, 0, 3]
            }
        ];

        assert.throws(() => {
            avaliarFilmes(filmes);
        }, /Nota inválida/);
    });

    it('CT14 - Deve rejeitar nota acima do limite máximo 5', () => {
        const filmes = [
            {
                nome: 'Os Saltimbancos',
                avaliacoes: [4, 6, 5]
            }
        ];

        assert.throws(() => {
            avaliarFilmes(filmes);
        }, /Nota inválida/);
    });
});

describe('Avaliação de Filmes - Processamento da Lista', () => {
    it('CT15 - Deve processar todos os filmes válidos', () => {
        const filmes = [
            { nome: 'Minha mãe é uma peça', avaliacoes: [5, 4, 4, 4, 5] },
            { nome: 'Saneamento Básico', avaliacoes: [3, 4, 2, 3, 4] },
            { nome: 'Se eu fosse você', avaliacoes: [1, 2, 3] },
            { nome: 'Homem-Aranha - De Volta Pra Casa', avaliacoes: [4, 4, 4] },
            { nome: 'Carrie, a Estranha', avaliacoes: [4, 4, 4, 4, 3] },
            { nome: 'Olhos Famintos', avaliacoes: [3, 3, 3] },
            { nome: 'Todo Mundo Em Pânico', avaliacoes: [3, 3, 3, 3, 2] }
        ];

        const resultadoEsperado = [
            {
                nome: 'Minha mãe é uma peça',
                quantidadePessoas: 5,
                media: 4.4,
                classificacao: 'Filme recomendado'
            },
            {
                nome: 'Saneamento Básico',
                quantidadePessoas: 5,
                media: 3.2,
                classificacao: 'Filme razoável'
            },
            {
                nome: 'Se eu fosse você',
                quantidadePessoas: 3,
                media: 2,
                classificacao: 'Filme ruim'
            },
            {
                nome: 'Homem-Aranha - De Volta Pra Casa',
                quantidadePessoas: 3,
                media: 4,
                classificacao: 'Filme recomendado'
            },
            {
                nome: 'Carrie, a Estranha',
                quantidadePessoas: 5,
                media: 3.8,
                classificacao: 'Filme razoável'
            },
            {
                nome: 'Olhos Famintos',
                quantidadePessoas: 3,
                media: 3,
                classificacao: 'Filme razoável'
            },
            {
                nome: 'Todo Mundo Em Pânico',
                quantidadePessoas: 5,
                media: 2.8,
                classificacao: 'Filme ruim'
            }

        ];

        const resultadoObtido = avaliarFilmes(filmes);

        assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    });
});