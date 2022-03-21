import './App.css';
import React, {useState} from 'react';

import HomePage from '../src/components/HomePage'
import Header from './components/Header';

import Dadosdoproduto from './mocks/produtos.json';

function App() {
  const [produtos, setProdutos] = useState(Dadosdoproduto);

  const [busca, setBusca] = useState('');
  const produtosFiltrados = produtos.filter((produto) => produto.nome.includes(busca))

  return <div className='App'>
    <Header busca={busca} setBusca={setBusca} />
    <HomePage />
    
  </div>

};

export default App;
