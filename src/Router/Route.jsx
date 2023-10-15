import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx'
import Users from "../Components/Users.jsx";
import Update from "../Components/Update.jsx";
const myCreate = createBrowserRouter([
      {
            path:'/',
            element:<App></App>
      },
      {
            path:'/user',
            loader:()=> fetch('http://localhost:5000/users'),
            element:<Users></Users>
      },
      {
            path:'/Update/:id',
            loader:({params})=> fetch(`http://localhost:5000/users/${params.id}`),
            element:<Update></Update>
      }

])

export default  myCreate;