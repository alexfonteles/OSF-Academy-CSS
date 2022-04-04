import React, { useContext, useState } from "react";


const Context = React.createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const onAdd = (product) => setCart((prev) => [...prev, product]);

    const emptyCart = () => setCart([])

    const onRemove = () => setCart()

    return (
    <Context.Provider value={{cart, onAdd, emptyCart, onRemove}}>{children}</Context.Provider>
    );
};

export default CartContextProvider;

export function useCartContext() {
    return useContext(Context);
}