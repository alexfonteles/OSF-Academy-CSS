import './cardlist.css';
import Card from '../Card';


const CardList = ({produtos}) => {
    return produtos.map((produto) => (
        <Card
            id={produto.id} 
            name={produto.nome}
            description={produto.descricao}
            price={produto.preco}
            imagem={produto.imagem}

        />
    ));

};

export default CardList;