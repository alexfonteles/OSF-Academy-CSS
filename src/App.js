import './App.css'

import Header from './components/Header'
import Card from './components/Card'
import Sidebar from './components/Sidebar'
import Homepage from './components/HomePage'


function App() {
  return <div className='App'>
    <Header />
    <div className='corpo'>
      <Sidebar />
      <Card />        
    </div>

    <Homepage />

  </div>

};

export default App;
