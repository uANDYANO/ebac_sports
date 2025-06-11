import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useAppDispatch, useAppSelector } from './hooks'
import { useGetProdutosQuery } from './services/api'
import { adicionar } from './store/reducer/carrinho'
import { alternar } from './store/reducer/favoritos'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { data: produtos = [] } = useGetProdutosQuery()
  const dispatch = useAppDispatch()
  const { itens: carrinho } = useAppSelector((state) => state.carrinho)
  const { itens: favoritos } = useAppSelector((state) => state.favoritos)

  function adicionarAoCarrinho(produto: Produto) {
    dispatch(adicionar(produto))
  }

  function favoritar(produto: Produto) {
    dispatch(alternar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
