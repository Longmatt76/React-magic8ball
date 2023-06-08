import answers from './answers';
import EightBall from './Eightball';


function App() {
  return (
    <div className="App">
     <EightBall answers={answers} />
    </div>
  );
}

export default App;
