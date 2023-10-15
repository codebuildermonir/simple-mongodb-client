import { useLoaderData } from "react-router-dom";

const Update = () => {
      const loader= useLoaderData()
      //console.log(loader)

      const handleUpdate = event =>{
            event.preventDefault();
             const form = event.target;
             const name = form.name.value;
             const email = form.email.value;
             const user= {name, email}
             console.log(user)
             fetch(`http://localhost:5000/users/${loader._id}`,{
                  method:'Put',
                  headers:{
                        "Content-type": "application/json"
                  },
                  body:JSON.stringify(user)
             })
             .then(res=>res.json())
             .then(data=>{
                  console.log(data)
                  if(data.modifiedCount >0){
                        alert("User update success")
                  }
             })
      }
      return (
            <div>

                  <h1>Update your information</h1>
                  <form onSubmit={handleUpdate} >
                        <input type="text" name="name" defaultValue={loader?.name} id="" /><br></br>
                        <input type="email" defaultValue={loader.email} name="email" id="" /><br></br>
                        <input type="submit" value="Update" name="" id="" /><br></br>

                  </form>
                  
            </div>
      );
};

export default Update;


