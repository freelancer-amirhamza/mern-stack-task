import React from 'react'
import { Link,  } from 'react-router-dom'

const Navbar = ({title, title1, link,link1}) => {
  return (
    <div className=" flex sm:gap-10 gap-5  items-center justify-center top-0  h-24 bg-slate-900 w-full">
        <Link to={`${link}`} className=" bg-white hover:bg-blue-900 font-secondary text-black hover:text-white text-xl duration-75 py-3 px-5 rounded-md font-bold cursor-pointer" >{title} </Link>
        <Link to={`${link1}`}  className=" bg-white hover:bg-blue-900 font-secondary text-black hover:text-white text-xl duration-75 py-3 px-5 rounded-md font-bold cursor-pointer">{title1} </Link>
      </div>
  )
}

export default Navbar