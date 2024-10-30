import React from 'react'
import Navbar from './Navbar'
import UserCard from './UserCard'
import Loader from './Loader'

const Home = ({users}) => {
  return (
    <>
    <div className="w-full h-full min-h-screen bg-slate-900 justify-center items-center gap-5 flex flex-col ">
    <Navbar title={`All Users`} title1={`Add User`} link={`/allUsers`} link1={`/create`}/>
      <h2 className="text-5xl font-bold border-b-4 border-blue-100 hover:border-blue-400 ">Welcome To Home Page</h2>
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-5 ">
      {users.length === 0  ? <> <Loader/> <Loader/> <Loader/> 
          </> : <>
          {users?.slice(0, 8).map((user,index)=>(
            <UserCard key={index} user={user} />
          ))}
          </>} 
          
        </div>
        </div>
    </>
  )
}

export default Home