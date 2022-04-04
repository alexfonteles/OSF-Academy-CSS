import { createContext } from "react/cjs/react.production.min";
import { useState } from "react/cjs/react.production.min";
import Dados from "../../mocks/produtos.json";

export const BuscaContext = createContext();

export const BuscaProvider = ({children}) => {
    const [produtos] = useState(Dados);
    const [busca, setBusca] = useState('');
    const produtosFiltrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(busca.toLowerCase()));
    return (
        <BuscaProvider value={{busca, setBusca, produtos, produtosFiltrados}}>
            {children}
        </BuscaProvider>
    )
} 