import './Cart.css';
import {useCartContext} from '../Context/CartContextProvider'
import CardList from '../CardList/cardlist';

const Cart = () => {
    const {cart, emptyCart} = useCartContext();
    const saldo=2000

    return(
          <div className='cart'>
              <div className='checklist'>
                      <h2>Checklist</h2>
                      <h3>Saldo: R${saldo},00 </h3>
                      <h3>Total: </h3>
                      <h3>Saldo restante: R${saldo},00 </h3>
          <div>
            <button className='finalizar'>Finalizar compra</button>
            <button className='esvaziar' onClick={() =>
                    emptyCart()}>Esvaziar carrinho</button>
          </div>
              </div>
              <div className='carrinho'>
                  <CardList produtos={cart} />
              </div>

          </div>
    )
}

export default Cart;