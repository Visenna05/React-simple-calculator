import {useState} from "react";
import { act } from "react-dom/test-utils";
import './App.css';


function App() {
  const [actNumber, setActNumber] = useState(0);
  const [prevNumber, setPrevNumber] = useState(0);

  const operator =()=>{
    setPrevNumber(actNumber);
    setActNumber(0);

    

  }

  return (
    
    <div className="grid">
      <div className="screen">
        <div className="smallNumbers">
          <div className="prevNumber">{prevNumber}</div>
          <div className="operation">+</div>
        </div>
        <div className="actNumber">{actNumber}</div>
      </div>

      <div className="buttons">
        <button className="twoplace" onClick={() => setActNumber(0)}>AC</button>
        <button className="oneplace" >DEL</button>
        <button className="oneplace" onClick={operator}>/</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 7)}>7</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 8)}>8</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 9)}>9</button>
        <button className="oneplace" onClick={operator}>*</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 4)}>4</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 5)}>5</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 6)}>6</button>
        <button className="oneplace" onClick={operator}>-</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 1)}>1</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 2)}>2</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 3)}>3</button>
        <button className="oneplace" onClick={operator}>+</button>
        <button className="oneplace" >.</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 0)}>0</button>
        <button className="twoplace" onClick={operator}>=</button>


      </div>
    </div>
    
  );
}

export default App;
