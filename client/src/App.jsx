const App = () => {

  const testingArray = {
    a: 'edit this',
    b: 123
    c: 'edit this',
    d: 123
  }


  const mergeConflict = () => {
    // edit line 13
    return testingArray.a + testingArray.b
  }


  return (
    <div>Testing Write Access</div>
  )
}

export default App