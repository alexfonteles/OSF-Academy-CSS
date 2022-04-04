import { createContext } from "react/cjs/react.production.min";

const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({children}) => {
    
    return (
        <PagamentoContext.Provider>
            {children}
        </PagamentoContext.Provider>
    )
}
