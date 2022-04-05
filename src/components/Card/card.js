import './card.css'
import { useCartContext } from "../Context/CartContextProvider"

function Card({id, nome, descricao, preco, imagem, alte}) {
    const {cart, adicionarProduto, removerProduto} = useCartContext();
    const produtoNoCarrinho = cart.find(produto => produto.id === id);

    return <div className='card'>
        <img src={imagem} alt={alte}/>
        <h2>{nome}</h2>
        <p className='descricao'>{descricao}</p>
       
    <div className='compra'>
        <p><span>R$ {preco}</span></p>
    <div className='button'>
        <button onClick={() => adicionarProduto({nome, imagem, id, preco})}
        >+</button>
        {produtoNoCarrinho?.quantidade || 0}
        <button onClick={() => removerProduto(id)}>-</button>
    </div>
    </div>

    </div>
};

export default Card;