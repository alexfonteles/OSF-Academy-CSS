import './card.css'


function Card({name, description, price, imagem, alte}) {
    return <div className='card'>
        <img src={imagem} alt={alte}/>
        <h2>{name}</h2>
        <p className='descricao'>{description}</p>
        <div className='compra'>
        <p><span>{price}</span></p>
        <button>Comprar</button>
        </div>

    </div>
};

export default Card;