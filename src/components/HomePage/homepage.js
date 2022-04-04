//import React, {useState} from 'react';
import './homepage.css'
import Produto from '../Produto';
import produtos from '../../mocks/produtos.json'
import Sidebar from '../Sidebar';


function HomePage() {
  return (
    <div className='home-page'>
      <Sidebar />      
      <ul className='box-card'>
        <li>
          {produtos.map(produto => (
          <Produto 
          {...produto} 
          key={produto.id} />))}          
        </li>
      </ul>
    </div>
)
};

export default HomePage;