import './card.css'
import { useCartContext } from "../Context/CartContextProvider"

function Card({id, name, description, price, imagem, alte}) {
    const {cart, adicionarProduto, removerProduto} = useCartContext();
    const produtoNoCarrinho = cart.find(produto => produto.id === id);

    return <div className='card'>
        <img src={imagem} alt={alte}/>
        <h2>{name}</h2>
        <p className='descricao'>{description}</p>
       
    <div className='compra'>
        <p><span>{price}</span></p>
    <div className='button'>
        <button onClick={() => adicionarProduto({name, imagem, id, price})}
        >+</button>
        {produtoNoCarrinho?.quantidade || 0}
        <button onClick={() => removerProduto(id)}>-</button>
    </div>
    </div>

    </div>
};

export default Card;