import React,{useState} from 'react';
import Button from './button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const btnFirst =['AC','+/-','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','=']
  const [inputValue, setInputValue]=useState('')
  const [numberOne,setNumberOne]=useState('')
  const [numberTwo,setNumberTwo]=useState('')
  const [operator,setOperator]=useState('')



  const handleNumber=(e)=>{
    const value = e.target.textContent

    if(numberOne !== ''){
      if(value === '%' || value === '-' || value === '*' || value === '+' || value === '/'){
        setInputValue('')
        setOperator(value)
        setInputValue(`${inputValue} ${value} `)
        return
      }
    }
    if(!isNaN(value) && operator === ''){
      setNumberOne(`${numberOne}${value}`)
      setInputValue(`${inputValue}${value}`)
    }else if(!isNaN(value) && operator !== ''){
      if(numberTwo === ''){
        setInputValue('')
        setNumberTwo(`${value}`)
      }
      setNumberTwo(`${numberTwo}${value}`)
      setInputValue(`${inputValue}${value}`)
    }else if(value === '+/-'){
      if(numberOne !== '' && numberTwo === ''){
        setNumberOne(-numberOne)
        setInputValue(`-${inputValue}`)
      }else if(numberOne !== '' && numberTwo !== ''){
        setNumberTwo(-numberTwo)
      }else if(numberOne === '' && numberTwo === '')return
    }
  }

  const calculateObject=(e)=>{
    const key = e.target.textContent
    const calcObj = {
      total:numberOne,
      next:numberTwo,
      operation:operator
    }
    handleNumber(e, calcObj)
    const result= calculate(calcObj,key)
    console.log(result)
    if(key === '='){
      setNumberOne(0)
      setNumberTwo(0)
      setOperator('')
      setInputValue(`${result.total}`)
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
      <h1 className='calc_header'>Lets do some Math</h1>
      <div className="calculator_container">
        <div className="input_field"><input type="text" value={inputValue} onChange={()=>setInputValue(inputValue)}/></div>
        <div className="row">
        {btnFirst.map((btn,ind)=>(
            <Button btn={btn} key={ind}  onClick={(e)=> calculateObject(e)}/>
          ))}
        </div>
      </div>
  </div>
)
  };

export default Calculator;
