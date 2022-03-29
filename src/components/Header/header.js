import './header.css'
import {Link} from 'react-router-dom'

function Header ({busca, setBusca}) {
    

    return <div className='cabecalho'>
    <Link to="/">Acordes Shooping</Link>
    <input placeholder=" Qual instrumento você quer tocar?" 
    value={busca} 
    onChange={(e) => setBusca(e.target.value)}/>
    <Link to="/cart" className='cart'><i class='fas fa-shopping-cart' /></Link>
    </div>;
};

export default Header;