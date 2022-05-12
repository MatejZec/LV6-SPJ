import artikli from './artikli.json';
import TrgovinaLista from './TrgovinaLista';
import logo from './logo.svg';
import Zaglavlje from './Zaglavlje';

function App() {
  return (
    <>
    <Zaglavlje url ={logo} trgovina="IT Oprema" />
      <div className='container'>
        <TrgovinaLista artikli={artikli}/>
      </div>
    </>
  );
}
export default App;
