# CAIXA DA LANCHONETE

# Desafio Resolvido - Automação do Caixa da Lanchonete

Este repositório contém a solução para o desafio de automação do caixa da Lanchonete da DB. O objetivo do desafio era criar uma lógica que calculasse o valor de uma compra com base no cardápio, regras de desconto e formas de pagamento da lanchonete.

## Sobre o Desafio

O desafio consistiu em implementar a lógica de cálculo de valor de compra para a Lanchonete da DB, considerando os itens do cardápio, descontos e acréscimos de acordo com a forma de pagamento escolhida.

## Solução Proposta

Neste repositório, você encontrará os arquivos que representam a solução para o desafio:

- **src/caixa-da-lanchonete.js**: Este arquivo contém a implementação da classe `CaixaDaLanchonete`, que inclui o método `calcularValorDaCompra(formaDePagamento, itens)` para calcular o valor da compra com base nos parâmetros fornecidos.

- **src/caixa-da-lanchonete.test.js**: Este arquivo contém cenários de teste para validar a solução. Novos casos de teste podem ser adicionados aqui para aumentar a confiabilidade da implementação.

### INSTALANDO E RODANDO NA SUA MÁQUINA
1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:
```bash
npm install
```

### VALIDANDO A SOLUÇÃO
Junto com a estrutura básica você está recebendo alguns cenários de testes para auxiliar na validação da sua solução. Recomendamos que você crie mais casos de teste para aumentar a confiabilidade da sua solução.
Para testar sua solução com os cenários já criados, basta rodar o seguinte comando:
```bash
npm test
```

Para saber mais consulte a [Documentação do Jest](https://jestjs.io/pt-BR/docs/getting-started).

### INPUTS
O método `calcularValorDaCompra` recebe dois parâmetros, `formaDePagamento` e `itens`, sendo o primeiro uma string com os possíveis valores válidos: `debito`, `credito` e `dinheiro`. O segundo parâmetro contém uma array dos itens que serão comprados. Cada item é uma string contendo o código do item e a quantidade do mesmo separados por uma vírgula.
EXEMPLO:
```js
['cafe,1','chantily,1']
```

### OUPUTS
O retorno do método `calcularValorDaCompra` deve ser sempre uma string e conteúdo dela pode ser ou o valor total da compra ou uma mensagem de erro conforme as regras descritas anteriormente. O valor da compra deve ser formatado com `R$` e decimais separados por vírgula.

Para padronizar a quantidade de decimais, utilize o método `toFixed` do JavaScript. Esse método serve o propósito deste desafio, porém na vida real a regra de arredondamento deve ser conferida! Para saber mais consulte a [Documentação do Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed).
EXEMPLO:
```js
// exemplo de saída do valor da compra
"R$ 6,00"

// exemplo de saída de erro
"Forma de pagamento inválida!"
```

### EXEMPLOS

EXEMPLO 1: Compra de chantily sem café.
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['chantily,1']);
```
O resultado esperado deve ser:
```
"Item extra não pode ser pedido sem o principal"
```

<br/>

EXEMPLO 2: Compra de café com chantily.
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['cafe,1','chantily,1']);
```
O resultado esperado deve ser:
```
"R$ 4,50"
```

<br/>

EXEMPLO 3: Compra de combo e dois cafés
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('credito', ['combo1,1','cafe,2']);
```
O resultado esperado deve ser:
```
"R$ 15,96"
```
