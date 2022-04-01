import React, { useContext, useState } from "react";


const Context = React.createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (product) => setCart((prev) => [...prev, product]);

    const emptyCart = () => setCart()

    return (
    <Context.Provider value={{cart, addProduct, emptyCart}}>{children}</Context.Provider>
    );
};

export default CartContextProvider;

export function useCartContext() {
    return useContext(Context);
}