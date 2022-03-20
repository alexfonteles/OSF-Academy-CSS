import './homepage.css'
import Sidebar from '../Sidebar'

import React, {useState} from 'react'
import Dadosdoproduto from '../../mocks/produtos.json'
import CardList from '../CardList/cardlist'

function Homepage() {
    const [produtos, setProdutos] = useState(Dadosdoproduto);

    return <div className='homepage'>        
        <Sidebar />
        <div className='cards'>
            <CardList produtos={produtos} />
        </div>                     
    </div>
};

export default Homepage;