import './cardlist.css';
import Card from '../Card';


const CardList = ({produtos}) => {
    return produtos.map((produto) => (
        <Card
            id={produto.id} 
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            imagem={produto.imagem}

        />
    ));

};

export default CardList;