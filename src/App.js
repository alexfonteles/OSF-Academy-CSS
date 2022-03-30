import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CartContextProvider from './components/Context/CartContextProvider'

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dadosdoproduto from "./mocks/produtos.json";
import CardList from './components/CardList/cardlist';
import Cart from './components/Cart'


function App() {
  const [produtos] = useState(Dadosdoproduto);

  const [busca, setBusca] = useState('');
  const produtosFiltrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(busca.toLowerCase()));


  return (
   
  <div className='App'>
    <CartContextProvider>
    <Router>
    <Header busca={busca} setBusca={setBusca}/>
    <div className='corpo'>
    <Sidebar />
    <div className='box-card'>
    <Routes>
    <Route path="/" element={ <CardList produtos={produtosFiltrados} /> } />
    <Route path="/cart" element={ <Cart /> } />
    </Routes>
    </div>
    </div>
    </Router>
    </CartContextProvider>
  </div>
  
  );
};

export default App;