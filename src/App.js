import './App.css';
import Clima from './componentes/Clima';
import Transporte from './componentes/Transporte';

function App() {
  return (
    <div className='app'>
      <div className='clima'>
        <Clima />
      </div>

      <div className='transporte'>
        <Transporte /> 
      </div>
    </div>
  );
}

export default App;
