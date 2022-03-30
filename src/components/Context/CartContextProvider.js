import React, { useContext, useState } from "react";


const Context = React.createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (product) => setCart((prev) => [...prev, product]);
    
    return (
    <Context.Provider value={{cart, addProduct}}>{children}</Context.Provider>
    );
};

export default CartContextProvider;

export function useCartContext() {
    return useContext(Context);
}