import './Cart.css';
import {useCartContext} from '../Context/CartContextProvider'
import CardList from '../CardList/cardlist';

const Cart = () => {
    const {cart, valorTotal} = useCartContext();
    
    return <div className='display'>
            <h2>Total no Carrinho: <span>R$ {valorTotal.toFixed(2)}</span> </h2>
        
          <div className='cart'>
        <CardList produtos={cart} />
        </div>
        
        </div>
}

export default Cart;