import {useState} from "react";
import './App.css';


function App() {
  const [actNumber, setActNumber] = useState(0);
  const [prevNumber, setPrevNumber] = useState(0);
  const [operand, setOperand] = useState("");

  const operator =(action)=>{
    
      if(operand!==""){
        setPrevNumber(equations());
      }
      else{
        setPrevNumber(actNumber);
      }

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
        break;
      default:
        return 0
  }
  }
  const erase = ()=>{
    setActNumber(0);
    setPrevNumber(0);
    setOperand("");
  }
 // const deleting = () =>{
   // setActNumber
  //}

  const equality = () =>{
    let result = equations();
    result = result.toString();
    setActNumber(result.slice(0,12));

    setPrevNumber("");
    setOperand("");

  }

  const addDigit = (e) =>{
    let input = e.target.value;
    let number = actNumber;
    number=number.lenght;
    console.log(number);
    if(actNumber<10000000000){

        if(actNumber === 0){
            setActNumber(input);
        } else {
            setActNumber(actNumber+input);
        }
      }

  }

  const equations = () =>{
    switch(operand){
      case '÷':
        return(parseFloat(prevNumber)/parseFloat(actNumber));

      case '×':
        return(parseFloat(prevNumber)*parseFloat(actNumber));

      case '-':
        return(parseFloat(prevNumber)-parseFloat(actNumber));

      case '+':
        return(parseFloat(prevNumber)+parseFloat(actNumber));
      default:
        return 0;
    }
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
        <button className="twoplace" onClick={erase}>AC</button>
        <button className="oneplace" onClick={erase}>DEL</button>
        <button className="oneplace" onClick={() => operator(1)}>÷</button>
        <button className="oneplace" onClick={addDigit} value={7}>7</button>
        <button className="oneplace" onClick={addDigit} value={8}>8</button>
        <button className="oneplace" onClick={addDigit} value={9}>9</button>
        <button className="oneplace" onClick={() => operator(2)}>×</button>
        <button className="oneplace" onClick={addDigit} value={4}>4</button>
        <button className="oneplace" onClick={addDigit} value={5}>5</button>
        <button className="oneplace" onClick={addDigit} value={6}>6</button>
        <button className="oneplace" onClick={() => operator(3)}>-</button>
        <button className="oneplace" onClick={addDigit} value={1}>1</button>
        <button className="oneplace" onClick={addDigit} value={2}>2</button>
        <button className="oneplace" onClick={addDigit} value={3}>3</button>
        <button className="oneplace" onClick={() => operator(4)}>+</button>
        <button className="oneplace" onClick={addDigit} value={"."}>.</button>
        <button className="oneplace" onClick={addDigit} value={0}>0</button>
        <button className="twoplace" onClick={equality}>=</button>


      </div>
    </div>
    
  );
}

export default App;
