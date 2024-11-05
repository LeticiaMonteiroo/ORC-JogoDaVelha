import './App.css';
import HelloWord from './components/HelloWord';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import SinglePLayer from './pages/SinglePlayer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <h1>Jogo da Velha</h1>
        <p>Escolha seu modo de jogo</p>
        <HelloWord text="Singleplayer"/>
        <HelloWord text="Multiplayer"/> */}
        <Routes>
          <Route path='/' element={<SinglePLayer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
