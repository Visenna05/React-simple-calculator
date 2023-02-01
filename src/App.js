import {useState} from "react";
import { act } from "react-dom/test-utils";
import './App.css';


function App() {
  const [actNumber, setActNumber] = useState(0);
  const [prevNumber, setPrevNumber] = useState(0);
  const [operand, setOperand] = useState("");

  const operator =(action)=>{
    setPrevNumber(actNumber);
    setActNumber(0);

    switch(action){
      case 1:
        setOperand('÷');
        break;
      case 2:
        setOperand('×');
        break;
      case 3:
        setOperand('-');
        break;
      case 4:
        setOperand('+');
  }
  }
  const deleting = ()=>{
    setActNumber(0);
    setPrevNumber(0);
    setOperand("");
  }

  const equality = () =>{
    switch(operand){
      case '÷':
        setActNumber(prevNumber/actNumber);
        break;
      case '×':
        setActNumber(prevNumber*actNumber);
        break;
      case '-':
        setActNumber(prevNumber-actNumber);
        break;
      case '+':
        setActNumber(prevNumber+actNumber); 
    }
    setPrevNumber("");
    setOperand("");
  }

  return (
    
    <div className="grid">
      <div className="screen">
        <div className="smallNumbers">
          <div className="prevNumber">{prevNumber}</div>
          <div className="operation">{operand}</div>
        </div>
        <div className="actNumber">{actNumber}</div>
      </div>

      <div className="buttons">
        <button className="twoplace" onClick={deleting}>AC</button>
        <button className="oneplace" >DEL</button>
        <button className="oneplace" onClick={() => operator(1)}>÷</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 7)}>7</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 8)}>8</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 9)}>9</button>
        <button className="oneplace" onClick={() => operator(2)}>×</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 4)}>4</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 5)}>5</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 6)}>6</button>
        <button className="oneplace" onClick={() => operator(3)}>-</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 1)}>1</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 2)}>2</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 3)}>3</button>
        <button className="oneplace" onClick={() => operator(4)}>+</button>
        <button className="oneplace" >.</button>
        <button className="oneplace" onClick={() => setActNumber(actNumber*10 + 0)}>0</button>
        <button className="twoplace" onClick={equality}>=</button>


      </div>
    </div>
    
  );
}

export default App;
