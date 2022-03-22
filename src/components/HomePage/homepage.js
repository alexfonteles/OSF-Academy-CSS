import './homepage.css';
import Sidebar from '../Sidebar';

import CardList from '../CardList/cardlist';

function Homepage() {

    return (
        <>
    <div className='homepage'>        
        <Sidebar />
        <div className='cards'>
        <CardList /> 
        </div>                     
    </div>
    </>
    );
}

export default Homepage;