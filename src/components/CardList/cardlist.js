import './cardlist.css';
import Card from '../Card';


const CardList = ({produtos}) => {
    return produtos.map((produto) => (
        <Card
            key={produto.id} 
            name={produto.nome}
            description={produto.descricao}
            price={produto.preco}
            image={produto.imagem}
        />
    ));

};

export default CardList;