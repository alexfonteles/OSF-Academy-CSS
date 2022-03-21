import './header.css'
import React, {useState} from 'react';

import Dadosdoproduto from '../../mocks/produtos.json';

function Header ({busca, setBusca}) {
    const [produtos, setprodutos] = useState(Dadosdoproduto);
   
    const produtosFiltrados = produtos.filter((produto) => produto.nome.includes(busca))
    
    return <header className='cabecalho'>
    <p>Acordes Shooping</p>
    <input placeholder=" Qual instrumento você quer tocar?" 
    value={busca} 
    onChange={(e) => setBusca(e.target.value)}/>
    </header>;
};

export default Header;