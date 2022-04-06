import './sidebar.css'

function Sidebar({busca, setBusca}) {
    
    return <div className='sidebar'>
        <h3><a href='#todas' onClick={e => setBusca('')}>TODAS AS CATEGORIAS</a></h3>
        <div className='sidebar-espaco'>
        <ul>
            <li><a href='#violao' onClick={e => setBusca('violão')}>Instrumentos de Corda</a></li>

            <li><a href='#teclado' onClick={e => setBusca('teclado')}>Instrumentos de teclas</a></li>
            
            <li><a href='#bateria' onClick={e => setBusca('bateria')}>Bateria e percussão</a></li>
           
            <li><a href='#sax' onClick={e => setBusca('sax')}>Instrumentos de Sopro</a></li>
            
            <li><a href='#caixa' onClick={e => setBusca('caixa')}>Áudio e tecnologia</a></li>
            
            <li><a href='#mesa' onClick={e => setBusca('mesa')}>Acessórios</a></li>           
        </ul>
        </div>
        </div>
};

export default Sidebar;