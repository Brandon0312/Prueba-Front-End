import logo from './logo.svg';
import './App.css';
import Body from './Componentes/Body/Body';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Componentes/NavBar/NavBar.js';

function App() {
  return (
    <div className="App my-5">
      <NavBar></NavBar>
      <Body />
    </div>
  );
}

export default App;
