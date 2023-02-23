import calculate from '../logic/calculate.js'
import operate from '../logic/operate.js'


describe('testing the operate function', ()=>{
  
  test('add 2 + 4',()=>{
    const obj = { 
      total:6,
      next:0,
      operation:'+',
    }
    expect(calculate(obj, 'AC')).toStrictEqual({total:null,next:null,operation:null})
  })

  test('add 2 * 4',()=>{
    const obj = { 
      total:6,
      next:'0',
      operation:'+',
    }
    expect(calculate(obj, '0')).toStrictEqual({})
  })

  test('valid operations',()=>{
    const obj = { 
      total:"9",
      next:'6',
      operation:'+',
    }
    const btnName = '8'
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({ ...obj, next: obj.next + btnName }))
  })

  test('valid operations',()=>{
    const obj = { 
      total:"9",
      next:'6',
      operation:'',
    }
    const btnName = '8'
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({next: obj.next + btnName, total: null,}))
  })


  test('presence of dot',()=>{
    const obj = { 
      total:"",
      next:'8.9',
      operation:'',
    }
    const btnName = '.'
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({ ...obj }))
  })


  test('presence of dot',()=>{
    const obj = { 
      total:"",
      next:'',
      operation:'*',
    }
    const btnName = '.'
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({ ...obj, next: '0.' }))
  })

  test('presence of total and dot',()=>{
    const obj = { 
      total:"56.4",
      next:'',
      operation:'*',
    }
    const btnName = '.'
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({ ...obj, next: '0.' }))
  })

  test('presence of total and dot',()=>{
    const obj = { 
      total:"",
      next:'',
      operation:'',
    }
    const btnName = '.'
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({ ...obj, next: '0.' }))
  })

  test('presence of total, next, operation and btnNamee === =',()=>{
    const obj = { 
      total:"68",
      next:'45',
      operation:'-',
    }
    const btnName = '='
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: null,
    }))
  })

  test('no presence of next and operation ',()=>{
    const obj = { 
      total:"67",
      next:'',
      operation:'',
    }
    const btnName = '='
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({}))
  })

  test('no presence of next and btnName === +/- ',()=>{
    const obj = { 
      total:"",
      next:'34',
      operation:'',
    }
    const btnName = '+/-'
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({ ...obj, next: (-1 * parseFloat(obj.next)).toString() }))
  })

  test('presence of total and btnName === +/- ',()=>{
    const obj = { 
      total:"93",
      next:'',
      operation:'',
    }
    const btnName = '+/-'
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({ ...obj, total: (-1 * parseFloat(obj.total)).toString() }))
  })

  test('no presence of total and next and btnName === +/- ',()=>{
    const obj = { 
      total:"",
      next:'',
      operation:'',
    }
    const btnName = '+/-'
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({}))
  })

  test('User pressed an operation button and there is an existing operation',()=>{
    const obj = { 
      total:"21",
      next:'',
      operation:'*',
    }
    const btnName = ''
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({ ...obj, operation: btnName }))
  })

  test('User pressed an operation button and there is an existing operation',()=>{
    const obj = { 
      total:"",
      next:'',
      operation:'*',
    }
    const btnName = ''
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({ total: 0, operation: btnName }))
  })

  test('User pressed an operation button and there is no operator',()=>{
    const obj = { 
      total:"",
      next:'34',
      operation:'',
    }
    const btnName = '*'
    expect(JSON.stringify(calculate(obj, btnName))).toMatch(JSON.stringify({
      total: obj.next,
      next: null,
      operation: btnName,
    }))
  })
})
