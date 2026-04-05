const UserCard = ({name,email,password,age,clas}) =>{


    return(
        <>
       <h1>my name :{name} </h1> 
       <h1> my gmail :{email} </h1>
        <h1>  my password :{password}</h1>
        <h1> my age :{age}</h1>
        <h1>my class : {clas}</h1>
    
        </>
    )
}


export default UserCard;