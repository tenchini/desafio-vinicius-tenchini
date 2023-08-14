class CaixaDaLanchonete {
    cardapio = {
        cafe: { descricao: "Café", valor: 3.0 },
        chantily: { descricao: "Chantily (extra do Café)", valor: 1.5 },
        suco: { descricao: "Suco Natural", valor: 6.2 },
        sanduiche: { descricao: "Sanduíche", valor: 6.5 },
        queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.0 },
        salgado: { descricao: "Salgado", valor: 7.25 },
        combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.5 },
        combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.5 },
    }

    formasDePagamento = ["dinheiro", "debito", "credito"]

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!itens || itens.length === 0) {
            return "Não há itens no carrinho de compra!"
        }

        if (!this.formasDePagamento.includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!"
        }

        let total = 0
        let listaDeItens = []
        for (const item of itens) {
            const [nome, quantidade] = item.split(",")
            const itemCardapio = this.cardapio[nome]
            const qtd = parseInt(quantidade)
            listaDeItens.push(nome)

            if (qtd <= 0) {
                return "Quantidade inválida!"
            }

            if (!itemCardapio) {
                return "Item inválido!"
            }

            if (
                listaDeItens.includes("chantily") &&
                !listaDeItens.includes("cafe")
            ) {
                return "Item extra não pode ser pedido sem o principal"
            }

            if (
                listaDeItens.includes("queijo") &&
                !listaDeItens.includes("sanduiche")
            ) {
                return "Item extra não pode ser pedido sem o principal"
            }

            total += itemCardapio.valor * parseInt(qtd)
        }

        if (metodoDePagamento === "dinheiro") {
            total -= total * 0.05
        } else if (metodoDePagamento === "credito") {
            total += total * 0.03
        }

        return `R$ ${total.toFixed(2).replace(".", ",")}`
    }
}

export { CaixaDaLanchonete }
