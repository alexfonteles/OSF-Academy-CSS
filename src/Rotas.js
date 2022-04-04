import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import CartContextProvider from './components/Context/CartContextProvider'
//import {useCartContext} from './components/Context/CartContextProvider'
import React, {useState} from 'react';
//import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './components/HomePage'
//import CardList from './components/CardList/cardlist';
//import Cart from './components/Cart'
//import Teste from './teste';
import Teste2 from './teste2';
import Dadosdoproduto from "./mocks/produtos.json";
import {BuscaProvider} from './components/Context/buscaContext'

function Rotas(){

return(
     <Router>    
        <BuscaProvider>
        <Header />
        </BuscaProvider>   
        <Routes>        
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={ <Teste2 /> } />     
        </Routes>
        

    </Router>
)
    /*const {busca, setBusca, produtosFiltrados} = useCartContext();
  return (
   
  <div className='App'>
    /*<CartContextProvider>
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
  );*/
  
};

export default Rotas;
