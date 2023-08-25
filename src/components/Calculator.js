import React, {useState} from 'react'
import {Container,Screen,Current,Previous, Button } from '../styles/Main';
function Calculator() {
  const [current, setCurrent] = useState('')
  const [previous, setPrevious ] = useState('')
  const [operation, setOperation ] = useState('')

  const appendValueHandler = (el) => {
    const value = el.target.getAttribute('data');
    if(value === '.' && current.includes('.')) return
    setCurrent (current + value); 

  };
  const deleteHandler = () => {
    setCurrent(String (current.slice(0, -1)));
  };
   const allclearHandler = () => {
    setCurrent('');
    setOperation('');
    setPrevious('');
   }
   const chooseOperationHandler = (el) => {
      if(current===  '') return
      if(previous !==''){
        let value = compute()
      setPrevious(value)
        } 
      else{
        setPrevious(current)
      }
      setCurrent('')
      setOperation(el.target.getAttribute('data'))
    }
      const equalHandler = () => {
        let value = compute()
        if(value === undefined || value == null ) return;
        setCurrent(value);
        setPrevious('');
        setOperation('');
      }

    const compute = () => {
        let result ;
        let previousNumber = parseFloat(previous)
        let currentNumber = parseFloat(current)
        if(isNaN(previousNumber) || isNaN(currentNumber)) return;
        switch(operation){
          case '÷' :
          result = previousNumber/currentNumber;
            break; 
          case "*":
        result = previousNumber * currentNumber;
            break;
          case "+":
        result = previousNumber+currentNumber;
            break;
          case "-":
        result = previousNumber - currentNumber;
            break;
      default:
        return;
    }
    return result;
        };
      


   
    return (
    <>
    <Container>
    <Screen>
    <Previous>
    {previous} {operation} 
    </Previous>
    <Current>
      {current}
    </Current>
    </Screen>
  
    <Button gridSpan={2} clear onClick={allclearHandler}>AC</Button>
    <Button onClick={deleteHandler} deletes>DEL</Button>  
    <Button data={'÷'} operation onClick={chooseOperationHandler}>÷</Button>
    <Button data={1} onClick={appendValueHandler}>1</Button>
    <Button data={2} onClick={appendValueHandler}>2</Button>
    <Button data={3} onClick={appendValueHandler}>3</Button>
    <Button data={'*'} operation onClick={chooseOperationHandler}>*</Button>
    <Button data={4} onClick={appendValueHandler}>4</Button>
    <Button data={5} onClick={appendValueHandler}>5</Button>
    <Button data={6} onClick={appendValueHandler}>6</Button>
    <Button data={'+'} operation onClick={chooseOperationHandler}>+</Button>
    <Button data={7} onClick={appendValueHandler}>7</Button>
    <Button data={8} onClick={appendValueHandler}>8</Button> 
    <Button data={9} onClick={appendValueHandler}>9</Button>
    <Button data={'-'} operation onClick={chooseOperationHandler}>-</Button>
    <Button data={0} zero onClick={appendValueHandler}>0</Button>
    <Button data={'.'} onClick={appendValueHandler}>.</Button>
    <Button gridSpan= {2} equals onClick ={equalHandler}>=</Button>

    </Container>
        
    </>
  )
}

export default Calculator;
 
