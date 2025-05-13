type Produto = {
    nome: string;
    custo: number;
    precoVenda: number;
};

function calcularLucros(produtos: Produto[]) {
    let lucroBaixo = 0;
    let lucroMedio = 0;
    let lucroAlto = 0;
    let retorno = []
    let porcentagemLucro = ''

    for (let i = 0; i < produtos.length; i++) {
        const lucroValor = produtos[i].precoVenda - produtos[i].custo;
        const lucroPorcentagem = (lucroValor / produtos[i].custo) * 100;
        
        if (lucroPorcentagem < 10) {
            lucroBaixo++;
            porcentagemLucro = 'lucro menor que 10%'
        } else if (lucroPorcentagem <= 30) {
            lucroMedio++;
            porcentagemLucro = 'lucro entre 10% e 30%'
        } else {
            lucroAlto++;
            porcentagemLucro = 'lucro maior que 30%'
        }

        retorno[i] = {
            produto: produtos[i].nome, 
            porcentagemLucro
        }
    }
    
    return{
        retorno,
        menorQue10: lucroBaixo,
        menorQue30: lucroMedio,
        maiorQue30: lucroAlto
    }
}

const produtos = [
    { nome: "Produto 1", custo: 10, precoVenda: 10.5 },
    { nome: "Produto 2", custo: 20, precoVenda: 25 },
    { nome: "Produto 3", custo: 15, precoVenda: 18 },
    { nome: "Produto 4", custo: 8, precoVenda: 12 },
    { nome: "Produto 5", custo: 5, precoVenda: 5.4 },
    { nome: "Produto 6", custo: 30, precoVenda: 40 },
    { nome: "Produto 7", custo: 12, precoVenda: 13 },
    { nome: "Produto 8", custo: 50, precoVenda: 65 },
    { nome: "Produto 9", custo: 22, precoVenda: 28 },
    { nome: "Produto 10", custo: 16, precoVenda: 18 },
    { nome: "Produto 11", custo: 25, precoVenda: 32.5 },
    { nome: "Produto 12", custo: 9, precoVenda: 10.8 },
    { nome: "Produto 13", custo: 13, precoVenda: 15 },
    { nome: "Produto 14", custo: 11, precoVenda: 14.3 },
    { nome: "Produto 15", custo: 7, precoVenda: 8.5 },
    { nome: "Produto 16", custo: 20, precoVenda: 21.5 },
    { nome: "Produto 17", custo: 18, precoVenda: 24 },
    { nome: "Produto 18", custo: 6, precoVenda: 6.4 },
    { nome: "Produto 19", custo: 40, precoVenda: 60 },
    { nome: "Produto 20", custo: 10, precoVenda: 10.8 },

];

console.log(calcularLucros(produtos));
