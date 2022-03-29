import React, {useState} from 'react';

import Sidebar from '../Sidebar';
import Header from '../Header'
import Dadosdoproduto from "../../mocks/produtos.json";
import CardList from '../CardList';



function HomePage() {
  const [produtos] = useState(Dadosdoproduto);

  const [busca, setBusca] = useState('');
  const produtosFiltrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(busca.toLowerCase()));

    return ( 
          <div className='App'>
        <Header />
        
        <div className='corpo'>
          <Sidebar busca={busca} setBusca={setBusca} /> 
          <div className='box-card'>
          <CardList produtos={produtosFiltrados} />
    
          </div>
        </div>
      </div>
      );
    };

export default HomePage;