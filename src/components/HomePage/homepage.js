import './homepage.css';
import Sidebar from '../Sidebar';
import React, {useState} from 'react';

import Dadosdoproduto from '../../mocks/produtos.json';
import CardList from '../CardList/cardlist';

function Homepage() {
    const [produtos, setprodutos] = useState(Dadosdoproduto);
   
    const [busca, setBusca] = useState('');
    const produtosFiltrados = produtos.filter((produto) => produto.nome.includes(busca))

    return (
        <>
    <div className='homepage'>        
        <Sidebar />
        <div className='cards'>
        <CardList produtos={produtosFiltrados} /> 
        </div>                     
    </div>
    </>
    );
}

export default Homepage;