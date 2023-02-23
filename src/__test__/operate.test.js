import operate from '../logic/operate'

describe('testing the operate function', ()=>{
  
  test('add 2 + 4',()=>{
    expect(operate(2, 4, '+')).toBe('6')
  })

  test('add 2 * 4',()=>{
    expect(operate(2, 4, '*')).toBe('8')
  })

  test('add 2 + 4',()=>{
    expect(operate(4, 2, '/')).toBe('2')
  })

  test('add 14 - 5',()=>{
    expect(operate(14, 5, '-')).toBe('9')
  })

  test('add 50 % 5',()=>{
    expect(operate(50, 5, '%')).toBe('0')
  })
})
