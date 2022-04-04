import React, { useContext, useState } from "react";
import Dadosdoproduto from "../../mocks/produtos.json";


const Context = React.createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart, busca, setBusca] = useState([]);

    const [produtos] = useState(Dadosdoproduto);
    const produtosFiltrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(busca.toLowerCase()));

    const onAdd = (product) => setCart((prev) => [...prev, product]);

    const emptyCart = () => setCart([])

    const onRemove = () => setCart()

    return (
    <Context.Provider value={{cart, onAdd, emptyCart, onRemove, produtosFiltrados, busca, setBusca, produtos, Dadosdoproduto}}>{children}</Context.Provider>
    );
};

export default CartContextProvider;

export function useCartContext() {
    return useContext(Context);
}