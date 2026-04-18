const userList = () => {

    const objects = [
        { id:1, name:"dhool", email:"dhool@gamil.com"},
        { id:2, name:"omer", email:"omer@gamil.com"},
        { id:3, name:"mohamed", email:"mohamed@gamil.com"},
    
        { id:4, name:"xabsa", email:"xabsa@gamil.com"},
        { id:5, name:"nimco", email:"nimco@gamil.com"},
    
        
    

    ]
 return(

     
    <div>
        {
        objects.length > 0 ? (
            <table border={1}>
              <thead>
              
              <tr>
                <th>qofka 1</th>
                <th>qofka 2</th>
                <th>qofka 3</th>
                <th>qofka 4</th>
                <th>qofka 5</th>
              </tr>
            
               </thead>

               <tbody>

              <tr>
                {
                    objects.map(object =>(
                        <td key={object.id}>{object.name}-{object.email}</td>
                    ))
                }
              </tr>
          </tbody>
      </table>
        ): <p>zxp mada waxpapa qoray maxan ku siya 😂😂😂😂</p>
     }

      
    </div>
 )
}


export default userList;