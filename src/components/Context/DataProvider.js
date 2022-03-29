
/*import Dadosdoproduto from "../../mocks/produtos.json";
import { useState, createContext } from "react";
import ReactDOM from "react-dom";

const DataContext = createContext()


export const DataProvider = ({children}) => {
    const [products, setProducts] = useState([{Dadosdoproduto}])

    import React, {createContext, useState, useEffect} from 'react'
import produtos from '../../mocks/produtos.json'



export const DataProvider = () => {

    const [produtos] = useState(Dadosdoproduto);

    const [busca, setBusca] = useState('');
    const produtosFiltrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(busca.toLowerCase()));
    

const [cart, setCart] = useState([])

const addCart = (id) =>{
    const check = cart.every(item =>{
        return item._id !== id
    })
    if(check){
        const data = products.filter(product =>{
            return product._id === id
        })
        setCart([...cart, ...data])
    }else{
        alert("The product has been added to cart.")
    }
}

useEffect(() =>{
   const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
   if(dataCart) setCart(dataCart)
},[])

useEffect(() =>{
    localStorage.setItem('dataCart', JSON.stringify(cart))
},[cart])


const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart
}

return (
    <DataContext.Provider value={{
        products,
        setProducts
    }}>
        {children}
    </DataContext.Provider>
)
}
*/