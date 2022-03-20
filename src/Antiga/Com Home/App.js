import './App.css'

import Header from './components/Header'
import produtosData from "./mocks/produtos.json"

import Sidebar from './components/Sidebar'
import Homepage from './components/HomePage'
import CardList from './components/CardList/cardlist'


function App() {
  const [produtos, setprodutos] = usestate(produtosData)
  return <div className='App'>
    <Header />
    <div className='corpo'>
      <Sidebar />
      <div className='box-card'>
      <CardList produtos={produtos} />

      </div>      
    </div>

    <Homepage />

  </div>

};

export default App;
