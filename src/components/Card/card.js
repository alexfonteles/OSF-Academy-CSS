import './card.css'
import { useCartContext } from "../Context/CartContextProvider"
function Card({id, name, description, price, imagem, alte}) {
    const {addProduct} = useCartContext();

    return <div className='card'>
        <img src={imagem} alt={alte}/>
        <h2>{name}</h2>
        <p className='descricao'>{description}</p>
       
    <div className='compra'>
        <p><span>{price}</span></p>
        <button onClick={() =>
          addProduct({
            id,
            nome: name,
            descricao: description,
            imagem: imagem,
            preco: price,
        })
    }
            >Comprar</button>
    </div>

    </div>
};

export default Card;