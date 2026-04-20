import { useState } from "react"

const App = () => {


  const [count,setCount] = useState(0);

 const handleIncrise = () => {
  setCount(count+1)
 }

 const handleDecrese = () => {
  setCount(count-1)
 }
  return(
 <>
 <h1>count{count}</h1>
 <button disabled={count === 0}onClick={handleDecrese}>decrement</button>
 <button onClick={handleIncrise}>increment</button>
 </>
  )
}

export default App