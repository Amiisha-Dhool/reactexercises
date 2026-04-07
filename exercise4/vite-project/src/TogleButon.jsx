import { useState } from "react"


const TogleButon = ()=>{

    const  [turnON, setTurnOn] = useState(true)

    const togle =()=>{
    setTurnOn(!turnON)
    }

    return(
        <>
       {turnON && <h1>the buton is on</h1>  }  
        {!turnON && <h1>the buton is of</h1>  }  
        <button  onClick={togle}> turn { !turnON ? 'on' : "of"}</button>
        </>
    )
}

export default TogleButon 