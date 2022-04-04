import './produto.css'

function Produto({nome, imagem, id, preco, unidade, descricao}) {
    
    return (
        <div className="card">
            <h2>{nome}</h2>
            <img src={imagem} alt={'foto de {nome}'}/>
            <p className='descricao'>{descricao}</p>
            <p className='compra'><span>{preco}</span></p>
            </div>
    )
  };
  
  export default Produto;