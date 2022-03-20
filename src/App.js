import './App.css';
import React, {useState} from 'react'

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dadosdoproduto from "./mocks/produtos.json";
import CardList from './components/CardList/cardlist'


function App() {
  const [produtos, setProdutos] = useState(Dadosdoproduto);

  return <div className='App'>
    <Header />
    <div className='corpo'>
      <Sidebar />
      <div className='box-card'>
      <CardList produtos={produtos} />

      </div>      
    </div>

  </div>

};

export default App;
