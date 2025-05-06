import './App.css';
import Gallery from './component/Gallery';
import Gallery1 from './components/Gallery';
import List from './List-1.10/List';

function App() {

  const nam = "Muhammad";
  const age = 21;
  const isMarrade = false;
  const hasCat = "Yes";

  return (
    <>
      <h1>Props</h1>
      <div className="card">
        <Gallery1 nam={nam} age={age} isMarrade={isMarrade} hasCat={hasCat} />
        <Gallery />
      </div>
      <div>
        <h2>List - 1.10</h2>
        <div>
          <List />
        </div>
      </div>
    </>
  )
}

export default App
