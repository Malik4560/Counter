import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => { 
    if (counter < 20) {
      setCounter(counter+1);
    } 
  }
  const removeValue = () => {
    setCounter(counter - 1);
    if (counter == 0) {
      setCounter(0);
    }
  }
  return (
    <>
      <h1>Tasbeeh Counter</h1>
      <h2>Counter value is : {counter}</h2>

      <button onClick={addValue}>Add Count</button>
      <button onClick={removeValue}>Remove Count</button>
    </>
  )
}
export default App