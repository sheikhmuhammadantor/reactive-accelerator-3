import './App.css';
import Gallery from './components/Gallery';

function App() {

  const nam = "Muhammad";
  const age = 21;
  const isMarrade = false;
  const hasCat = "Yes";

  return (
    <>
      <h1>Props</h1>
      <div className="card">
        <Gallery nam={nam} age={age} isMarrade={isMarrade} hasCat={hasCat} />
      </div>
    </>
  )
}

export default App
