import { useEffect, useState } from "react";

function App(){
    const [mouse, setMouse] = useState({x: 0, y: 0});
    useEffect(()=>{
      const mouseChange = (e) => {
        setMouse({x: e.clientX, y: e.clientY})
      }

       window.addEventListener("mousemove",mouseChange)


       //clean up
       return ()=> {
        window.removeEventListener("mousemove",mouseChange)
      }
    },[]);
  return(
    <>
    <p>horisental{mouse.x} </p>
    <p>vertical{mouse.y}</p>
    </>
  )
} 

export default App;