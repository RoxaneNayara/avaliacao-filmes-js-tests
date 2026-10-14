// Calcula a média das avaliações
export const calcularMedia = (avaliacoes) => {
    if (!Array.isArray(avaliacoes)) {
        throw new Error('Avaliações inválidas');
    }

    if (avaliacoes.length === 0) {
        throw new Error('O filme deve possuir avaliações');
    }

    let somaAvaliacoes = 0;

    avaliacoes.forEach(nota => {
        if (
            typeof nota !== 'number' ||
            !Number.isFinite(nota) ||
            nota < 1 ||
            nota > 5
        ) {
            throw new Error('Nota inválida');
        }

        if (nota < 0) {
            throw new Error('Nota inválida');
        }

        somaAvaliacoes += nota;
    });

    return somaAvaliacoes / avaliacoes.length;
}

// Classifica o filme de acordo com a média
export const verificarMedia = (media) => {
    if (media >= 4) {
        return 'Filme recomendado';
    } else if (media >= 3) {
        return 'Filme razoável';
    } else {
        return 'Filme ruim';
    }
};

// Percorre a lista e apresenta os resultados
export const avaliarFilmes = (filmes) => {
    return filmes.map(filme => {
        const media = calcularMedia(filme.avaliacoes);
        const quantidadePessoas = filme.avaliacoes.length;
        const classificacao = verificarMedia(media);

        return {
            nome: filme.nome,
            quantidadePessoas,
            media,
            classificacao
        };
    });
};
