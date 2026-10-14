# Avaliação de Filmes — JavaScript e Testes Automatizados

## Sobre o projeto

Projeto desenvolvido como exercício prático de JavaScript e testes automatizados. A aplicação recebe uma lista de filmes com suas respectivas notas e retorna, para cada filme:

- Nome do filme;
- Quantidade de pessoas que avaliaram;
- Média aritmética das notas;
- Classificação conforme a média calculada.

> **Nota:** Os filmes mencionados são obras reais, mas todas as notas e avaliações utilizadas são fictícias, criadas exclusivamente para fins didáticos e de teste. Os resultados não representam avaliações reais do público.

## Regras de negócio

As notas válidas variam de **1 a 5**, inclusive. A implementação aceita valores numéricos decimais nesse intervalo.

| Média das avaliações | Classificação |
| --- | --- |
| Maior ou igual a 4 | Filme recomendado |
| Maior ou igual a 3 e menor que 4 | Filme razoável |
| Menor que 3 | Filme ruim |

A aplicação rejeita listas de avaliações vazias, valores nulos, formatos incorretos e notas não numéricas ou fora da faixa definida.

## Tecnologias utilizadas

| Tecnologia | Papel no projeto |
| --- | --- |
| **JavaScript (ES Modules)** | Linguagem utilizada na implementação das funções e dos testes. |
| **Node.js** | Ambiente de execução do JavaScript fora do navegador. |
| **Mocha** | Framework que organiza e executa os casos de teste com `describe()` e `it()`. |
| **Assert (`node:assert`)** | Módulo nativo do Node.js para comparar resultados e verificar exceções esperadas. |

**Diferença entre Node.js, Mocha e Assert:** o Node.js executa o código; o Mocha organiza e executa a suíte de testes; e o Assert verifica se os resultados obtidos correspondem aos esperados. O Assert já faz parte do Node.js e não precisa ser instalado separadamente.

## Estrutura do projeto

```text
avaliacaoFilme/
├── source/
│   └── avaliacaoFilmes.js
├── test/
│   └── avaliacaoFilme.test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

A pasta `node_modules/` é gerada na instalação das dependências e deve ficar fora do repositório por meio do `.gitignore`.

## Funções implementadas

- **`calcularMedia(avaliacoes)`**: valida as notas, calcula e retorna a média aritmética.
- **`verificarMedia(media)`**: classifica o filme com base na média.
- **`avaliarFilmes(filmes)`**: processa uma lista de filmes e retorna os nomes, as quantidades de avaliações, as médias e as classificações.

## Estratégia de testes

Os cenários foram elaborados com técnicas de **teste de caixa-preta**, cobrindo classificações, valores-limite, entradas inválidas e processamento de uma lista com vários filmes.

| Suíte | Casos de teste | Quantidade |
| --- | --- | ---: |
| Partição de equivalência | CT01–CT03 | 3 |
| Análise de valor-limite da classificação | CT04–CT07 | 4 |
| Testes negativos, incluindo limites das notas | CT08–CT14 | 7 |
| Processamento de múltiplos filmes | CT15 | 1 |
| **Total** | | **15** |

As condições de classificação também estão contempladas em uma **tabela de decisão**, representada pelos cenários das três classificações, sem duplicação de testes.

### Resultado da última execução local

**15 testes aprovados, 0 falhas.**

## Como executar

### 1. Clonar o repositório

```bash
git clone https://github.com/RoxaneNayara/avaliacao-filmes-js-tests.git
cd avaliacao-filmes-js-tests
```

> Substitua a URL acima se o repositório for publicado com outro nome.

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar todos os testes

```bash
npx mocha
```

Para executar somente uma suíte:

```bash
npx mocha --grep "Testes Negativos"
```

## Considerações finais

O exercício permitiu praticar manipulação de arrays, funções em JavaScript, validação de dados e automatização de testes. Os cenários verificam tanto os resultados esperados quanto o tratamento de entradas inválidas.

---

**Desenvolvido por Roxane Nayara** — Exercício prático de JavaScript e Testes de Software.
