import React, { useContext, useState, useEffect } from "react";


const cartContext = React.createContext();
cartContext.displayName = "Carrinho"

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    return (
    <cartContext.Provider value={{cart, setCart, quantidadeCarrinho, setQuantidadeCarrinho, valorTotal, setValorTotal}}>{children}</cartContext.Provider>
    );
};
export default CartContextProvider;

export function useCartContext() {
    const {cart, setCart, quantidadeCarrinho, setQuantidadeCarrinho, valorTotal, setValorTotal} = useContext(cartContext);

    const mudarQuantidade = (id, quantidade) => cart.map(produto => {
        if (produto.id === id) produto.quantidade += quantidade;
        return produto;
      });

    function adicionarProduto(novoProduto) {
        const temOProduto = cart.some(produto => produto.id === novoProduto.id);
        let novoCarrinho = [...cart];
        if(!temOProduto) {
            novoProduto.quantidade = 1;
            novoCarrinho.push(novoProduto);
            return setCart(novoCarrinho);
        } 
        novoCarrinho = mudarQuantidade(novoProduto.id, 1);
        setCart(novoCarrinho);
      };

    function removerProduto(id) {
        const Produto = cart.find(produto => produto.id === id);
        const ultimo = Produto.quantidade === 1;
        let novoCarrinho;
        if(ultimo) {
            novoCarrinho = cart.filter(produto => produto.id !== id);
            return setCart(novoCarrinho);
        }
        novoCarrinho = mudarQuantidade(id, -1);
        setCart(novoCarrinho);
    }

    function efetuarCompra() {
        setCart([]);
    }
    function mensagem() {
        alert('Compra efetuada com sucesso');
    }

    useEffect(() => {
        const {novoTotal} = cart.reduce((contador, Produto) => ({
            novoTotal: contador.novoTotal + (Produto.valor*Produto.quantidade)
        }), {novoTotal: 0})
        setValorTotal(novoTotal);
}, [cart, setQuantidadeCarrinho, setValorTotal])

    return {
        cart,
        setCart,
        adicionarProduto,
        removerProduto,
        quantidadeCarrinho,
        valorTotal,
        efetuarCompra,
        mensagem
    };
}