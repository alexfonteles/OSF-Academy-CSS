import './card.css'
import { useCartContext } from "../Context/CartContextProvider"
function Card({name, description, price, imagem, alte, estoque}) {
    const {addProduto} = useCartContext();

    return <div className='card'>
        <img src={imagem} alt={alte}/>
        <h2>{name}</h2>
        <p className='descricao'>{description}</p>
        <p className='header-estoque'>Estoque: <span className='estoque'>{estoque}</span></p>
       
    <div className='compra'>
        <p><span>{price}</span></p>
    <div className='button'>
    <button onClick={() => addProduto(name, imagem, price)
         /* onAdd({
            nome: name,
            imagem: imagem,
            preco: price,
            estoque: estoque
        })*/
    }
            >+</button>
        <button>-</button>
    </div>
    </div>

    </div>
};

export default Card;