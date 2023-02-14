import React,{useState} from 'react';
import Button from './button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const btnFirst =['AC','+/-','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','=']
  const [inputValue, setInputValue]=useState('')
  const [numberOne,setNumberOne]=useState('')
  const [numberTwo,setNumberTwo]=useState(0)
  const [operator,setOperator]=useState('')



  const handleNumber=(e)=>{
    const value = e.target.textContent

    if(numberOne !== ''){
      if(value === '%' || value === '-' || value === '*' || value === '+' || value === '/' ){
        console.log(numberOne)
        setInputValue('')
        setOperator(()=>value)
        setInputValue(`${value}`)
        return
      }
    }
    if(!isNaN(value) && operator === ''){
      setNumberOne(`${numberOne}${value}`)
      setInputValue(`${inputValue}${value}`)
    }else if(!isNaN(value) && operator !== ''){
      if(!numberTwo){
        setInputValue('')
        setNumberTwo(`${value}`)
        // setInputValue(`${inputValue}${value}`)
      }
      setNumberTwo(`${numberTwo}${value}`)
      setInputValue(`${value}`)
    }
  }

  const calculateObject=(e)=>{
    const key = e.target.textContent
    handleNumber(e)
    const calcObj ={
      total:numberOne,
      next:numberTwo,
      operation:operator
    }
    const result= calculate(calcObj,e.target.textContent)
    if(key === '='){
      setNumberOne(0)
      setNumberTwo(0)
      setOperator('')
      setInputValue(result.total)
    }
    if(key === 'AC'){
      setNumberOne(0)
      setNumberTwo(0)
      setOperator('')
      setInputValue('')
    }
  }


  

  return(
    <div className="container">
    <div className="calculator_container">
      <div className="input_field"><input type="text" value={inputValue} onChange={()=>setInputValue(inputValue)}/></div>
      <div className="row">
      {btnFirst.map((btn,ind)=>(
          <Button btn={btn} key={ind}   onClick={(e)=> calculateObject(e)}/>
        ))}
      </div>
    </div>
  </div>
)
  };

export default Calculator;
