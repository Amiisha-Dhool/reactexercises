import { useState } from "react"
import { useEffect } from "react"

function App(){
const [title, setTitle] = useState("dhool")
const [great,setGreat] = useState("asc")
  useEffect(()=>{
    document.title =  great + title
    {title ? great : document.title = "welcome saxip"}
     
  },[title]) 
  return(
    <>

     <h1>choose your greate</h1>
    <input type="text" 
    onChange={(e)=> setGreat(e.target.value)}
    value={great}
    />
    <h1>enter your name</h1>
    <input type="text"  
    onChange={(e)=> setTitle(e.target.value)}  
    value={title}
    />
    </>
  )
}


export default App