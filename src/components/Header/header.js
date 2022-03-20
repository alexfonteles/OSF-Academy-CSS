import './header.css'

function Header ({busca, setBusca}) {
    return <header className='cabecalho'>
    <p>Acordes Shooping</p>
    <input placeholder=" Qual instrumento você quer tocar?"value={busca} onChange={(e) => setBusca(e.target.value)}/></header>;
};

export default Header;