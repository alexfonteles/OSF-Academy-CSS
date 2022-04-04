import './Cart.css';
import {useCartContext} from '../Context/CartContextProvider'
import CardList from '../CardList/cardlist';

const Cart = () => {
    const {cart, emptyCart} = useCartContext();
    
    return <div>
        <button className='esvaziar' onClick={() =>
          emptyCart()}>Esvaziar carrinho</button>
          <div className='cart'>
        <CardList produtos={cart} />
        </div>
        
        </div>
}

export default Cart;