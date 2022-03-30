import './Cart.css';
import {useCartContext} from '../Context/CartContextProvider'
import CardList from '../CardList/cardlist';

const Cart = () => {
    const {cart} = useCartContext();
    console.log(cart)
    
    return <div>
        <h1>Excluir</h1>
        <CardList produtos={cart} />;
        </div>
}

export default Cart;