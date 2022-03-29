import './sidebar.css'

function Sidebar() {
    console.log("renderizei")
    return <div className='sidebar'>
        <h3>Instrumentos de Corda</h3>
        <ul>
            <li>Violão</li>
        </ul>
        <h3>Instrumentos de teclas</h3>
        <ul>
            <li>Teclado</li>
            <li>Piano</li>
            <li>Acordeon/Sanfona</li>
            <li>Acessórios</li>
        </ul>
        <h3>Bateria e percussão</h3>
        <ul>
            <li>Bateria</li>
            <li>Pratos de bateria</li>
            <li>Banco/Caixa de bateria</li>
            <li>Pedal da bateria</li>
            <li>Ferragens para percussão</li>
            <li>Cajón</li>
            <li>Fanfarra/Marching Band</li>
            <li>Peles</li>
        </ul>
        <h3>Instrumentos de Sopro</h3>
        <ul>
            <li>Saxofone</li>
            <li>Clarineta</li>
            <li>Flauta</li>
            <li>Trombone</li>
            <li>Trompete</li>
            <li>Bombardino/Tuba</li>
            <li>Gaita</li>
            <li>Escaleta</li>
        </ul>
        <h3>Kids</h3>
        <ul>
            <li>Violão</li>
            <li>Flauta</li>
            <li>Bateria</li>
            <li>Guitarra/Contrabaixo</li>
            <li>Teclado/Piano</li>
            <li>Violino</li>
            <li>Outros</li>
        </ul>
        <h3>Iluminação</h3>
        <ul>
            <li>LED/Laser</li>
            <li>Estrobo/Refletor</li>
            <li>Moving</li>
            <li>Máquina de fumaça</li>
            <li>Acessórios</li>
        </ul>
        <h3>Áudio e tecnologia</h3>
        <ul>
            <li>Caixa de som</li>
            <li>Microfone</li>
            <li>Mesa de som</li>
            <li>Interface</li>
            <li>Pedestral/Suporte/Rack</li>
            <li>Fone de ouvido</li>
            <li>Cabo</li>
            <li>Periféricos</li>
        </ul>
        <h3 className='mais'>Ver mais</h3>        
    </div>
};

export default Sidebar;