import './App.css';
import React, {useState} from 'react';
import Context from './Context';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dadosdoproduto from "./mocks/produtos.json";
import CardList from './components/CardList/cardlist';


function App() {
  const [produtos] = useState(Dadosdoproduto);

  const [busca, setBusca] = useState('');
  const produtosFiltrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(busca.toLowerCase()));


  return (<div className='App'>
    <Header busca={busca} setBusca={setBusca}/>
    <div className='corpo'>
      <Sidebar />
      <div className='box-card'>
      <CardList produtos={produtosFiltrados} />
      </div>      

    </div>

  </div>);
(<Context.Provider>
  <div>
    <p> DevMedia Context API</p>
  </div>
</Context.Provider>);
};

export default App;