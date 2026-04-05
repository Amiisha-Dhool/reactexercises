import UserCard from "./UserCard";

function App(){
    
  const name = "dhool pari"
  const email = "dhoolpari@gamil.com"
  const age = 21 
  const password = '233'
  const clas = 'intermidiate'
  

  return(
    <>
     <UserCard 
     name = {name}
     email = {email}
      age = {age}
      password = {password}
      clas = {clas}

     />
    </>
  )
}

export default App;