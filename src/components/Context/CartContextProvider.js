import React, { useContext, useState } from "react";


const Context = React.createContext();
Context.displayName = "Carrinho"

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    return (
    <Context.Provider value={{cart, setCart}}>{children}</Context.Provider>
    );
};

export default CartContextProvider;

export function useCartContext() {
    const {cart, setCart} = useContext(Context);
    function adicionarProduto(novoProduto) {
        const temOProduto = cart.some(produto => produto.id === novoProduto.id);
        if(!temOProduto) {
            novoProduto.quantidade = 1;
            return setCart((prev) => [...prev, novoProduto]);
        }
        setCart(prev => prev.map(produto => {
            if(produto.id === novoProduto.id) produto.quantidade += 1;
            return produto;
        }))
    }

    function removerProduto(id) {
        const Produto = cart.find(produto => produto.id === id);
        const ultimo = Produto.quantidade === 1;
        if(ultimo) {
            return setCart(prev => prev.filter(produto => produto.id !== id));
        }
        setCart(prev => prev.map(produto => {
            if(produto.id === id) produto.quantidade -= 1;
            return produto
        }))
    }
    return {
        cart,
        setCart,
        adicionarProduto,
        removerProduto
    };
}