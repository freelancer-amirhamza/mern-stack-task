import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader';
import Navbar from '../Navbar';
import { getUserById, updateUser } from '../../api';

const UpdateUser = () => {
    const {id} = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [imageUrl, setImageUrl] = useState();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
         getUserById(id).then((users)=>{
            setName(users.data.name)
            setEmail(users.data.email)
            setPhone(users.data.phone)
            setAddress(users.data.address)
            setImageUrl(users.data.imageUrl)
        }).catch(err => console.log(err.message));
    },[id])

    const handleUpdate = async (e)=>{
        setLoading(true)
        e.preventDefault()
        await updateUser(id, {name, email, phone, imageUrl, address})
        .then(()=> navigate('/allUsers'))
        .catch(err => console.log(err));
        setLoading(false)
    }

  return (
    <>
   <div className="w-full h-full min-h-screen bg-slate-900 justify-center items-center  flex flex-col ">
   <Navbar title={`All Users`} title1={`Back Home`} link={`/allUsers`} link1={`/`}/>
        {loading ? <> <Loader/> </> : <>
        <div className="w-max h-auto bg-slate-700  border-2 border-blue-300 rounded-md  items-center justify-center flex flex-col ">
        <form action="" className='p-3 rounded-md flex flex-col items-center justify-center w-full h-full gap-3 '>
                <div className="font-semibold flex flex-col gap-1 w-full">
                    <label  htmlFor="name">Name</label>
                    <input className=' bg-slate-800 sm:w-full sm:py-3 py-2 px-3  rounded-sm focus:outline-2 focus:outline focus:outline-blue-300 ' type="text" name="name" id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="font-semibold flex flex-col gap-1 w-full ">
                    <label  htmlFor="imageUrl">Image</label>
                    <input className='  bg-slate-800  sm:py-3 py-2 px-3 rounded-sm focus:outline-2 focus:outline focus:outline-blue-300  '  type="text" name="imageUrl" id="imageUrl"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    />
                </div>
                <div className="font-semibold flex flex-col gap-1 w-full ">
                    <label  htmlFor="email">Email</label>
                    <input className='  bg-slate-800  sm:py-3 py-2 px-3 rounded-sm focus:outline-2 focus:outline focus:outline-blue-300  ' type="email" name="email" id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="font-semibold  flex flex-col gap-1 w-full">
                    <label  htmlFor="phone">Phone Number</label>
                    <input className='  bg-slate-800 sm:pr-20 nu sm:py-3 py-2 px-3 rounded-sm focus:outline-2 focus:outline focus:outline-blue-300  ' type="number" name="phone" id="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <div className="font-semibold  flex flex-col gap-1 w-full">
                    <label  htmlFor="address">Address</label>
                    <input className='  bg-slate-800 sm:py-3 py-2 px-3 rounded-sm focus:outline-2 focus:outline focus:outline-blue-300  ' type="text" name="address" id="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    />
                </div>
                {loading ? 
                <>
                <button type="button" className="bg-green-600 text-white p-2   rounded-md font-bold " disabled> Processing...</button>
                </> : <>
                <button onClick={handleUpdate} type="submit" className='font-semibold bg-green-600 text-white px-3 py-2 sm:px-12 sm:py-3 sm:text-xl rounded m-3 '>Update User</button>
                </>}
                
            </form>
        </div>
        </>}
    </div>
    </>
  )
}

export default UpdateUser