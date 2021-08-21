//nome, valor, classe valor fixo

class Produto {
  construtor(nome, preco)
  
  cadastroProduto(nome, valor) {
    this.nome = nome
    this.preco = valor
  }
}

let produtos = []
produtos.push(new Produto('alcool, 2'))
produtos.push(new Produto('detergente, 1'))
produtos.push(new Produto('desinfetante, 1,5'))
produtos.push(new Produto('sabonete 0,5'))

console.log(produtos)
