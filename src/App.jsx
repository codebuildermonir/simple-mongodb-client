
import './App.css'


function App() {

  const handleForm= (e)=>{
    e.preventDefault()

    const form = e.target;
     const name= form.name.value;
     const email= form.email.value;
     const user={name, email}
     console.log(user)

     fetch('http://localhost:5000/users',{
      method:"post",
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify(user)

     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
      if(data.insertedId){
        alert("Your info success")
        form.reset()
      }
    })

  }
  

  return (
    <>
      <h1>Simple mongodb server</h1>

      <form onSubmit={handleForm} >
        <input type="text" name="name" id="" /><br></br>
        <input type="email" name="email" id="" /><br></br>
        <input type="submit" name="" id="" />
      </form>
       
    </>
  )
}

export default App

