import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './component/Home'
import CreateUser from './component/create/CreateUser'
import UpdateUser from './component/update/UpdateUser'
import AllUsers from './component/allUsers/AllUsers'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers =async ()=> {
      await  axios.get("http://localhost:4000")
          .then((users)=> setUsers(users.data))
          .catch(err => console.log(err));
  }
      useEffect(()=>{
          getAllUsers()
      },[users])
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home users={users} /> } />
        <Route path='/create' element={<CreateUser/> } />
        <Route path='/update/:id' element={<UpdateUser/> } />
        <Route path='/allUsers' element={<AllUsers users={users}/> } />
      </Routes>
    </Router>
    </>
  )
}

export default App