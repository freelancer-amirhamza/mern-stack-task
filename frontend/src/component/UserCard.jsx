import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from './Loader';
import { deleteUser } from '../api';

const UserCard = ({user, setUsers}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const { name, email, phone, address, imageUrl} = user;

    const handleDelete = async(id)=>{
      setLoading(true)
      await deleteUser(id).then(()=>{
        setUsers((prevUser)=> prevUser.filter(user => user._id !== id))
        navigate('/')
    }).catch((err)=> console.log(err.message));
      
      setLoading(false);
  }
  return (
    <>  
    {loading ? <> <Loader/> </> : <> 
    <div className="w-64 max-h-88 border overflow-hidden border-dotted duration-300 hover:scale-105 rounded-sm bg-slate-800 ">
            <div className="flex flex-col items-center justify-center w-full p-1 ">
              <div className=" h-60 w-full ">
                <img className='w-full h-full object-cover' src={imageUrl} alt="" />
              </div>
              <div className="flex w-full flex-col  items-center gap-2">
              
                <h1 className="flex gap-1  text-[1rem] w-full ">Name: <span> {name} </span></h1>
                
                <h1 className="flex gap-1 truncate text-[1rem] pr-2  w-full">Email: <span>{email} </span></h1>
              
                <h1 className="flex gap-1 text-[1rem] w-full">Phone: <span>{phone} </span></h1>
                
                <h1 className="flex gap-1 text-[1rem] w-full">Address: <span> {address}</span></h1>
                
              </div>
              <div className="flex items-center justify-between w-full p-3">
                <Link to={`/update/${user._id}`} className=" bg-green-600 text-white hover:text-white py-2 px-5 rounded-md font-bold cursor-pointer">Update</Link>
                
                {loading ? 
                <>
                <button type="button" className="bg-orange-600 text-white py-2 px-2   rounded-md font-bold " disabled> Processing...</button>
                </> : <>
                <Link onClick={()=> handleDelete(user._id) }  className=" bg-orange-600 text-white hover:text-white py-2 px-5 rounded-md font-bold cursor-pointer">Delete</Link>
                </>}
                
              </div>
            </div>
          </div>
    </>}
        
    </>
  )
}

export default UserCard