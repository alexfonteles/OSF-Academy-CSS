import './Cart.css';
import {useCartContext} from '../Context/CartContextProvider'
import CardList from '../CardList/cardlist';

const Cart = () => {
    const {cart, emptyCart} = useCartContext();
    console.log(cart)
    
    return <div>
        <button className='esvaziar' onClick={() =>
          emptyCart({ })}>Esvaziar carrinho</button>
        <CardList produtos={cart} />;
        </div>
}

export default Cart;