import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
      const loaderUser= useLoaderData()
      const [user, setUser]= useState(loaderUser)
     
      const handleDelete=(_id)=>{
            console.log(_id)
            fetch(`http://localhost:5000/users/${ _id}`,{
                  method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                  console.log(data)
                  if(data.deletedCount >0){
                        alert ('Your delete success')
                        const deleting= user.filter(user=> user._id !== _id)
                        setUser(deleting)
                  }
            })
      }

      return (
            <div>
                  {
                        user.map(user=> <p key={user._id}>
                              {user.name} : {user.email}
                              <Link to={`/Update/${user._id}`} >
                                    <button>Update</button>
                              </Link>
                               <button onClick={()=>handleDelete(user._id)}>Delete</button>

                        </p>)
                  }
                  
            </div>
      );
};

export default Users;


