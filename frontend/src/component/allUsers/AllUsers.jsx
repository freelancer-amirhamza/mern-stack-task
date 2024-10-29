import UserCard from '../UserCard';
import Navbar from '../Navbar';
import Loader from '../Loader';

const AllUsers = ({users}) => {
  const reversedUsers = [...users].reverse();
  return (
    <>  
    
    <div className="w-full h-full min-h-screen bg-slate-900 justify-center items-center gap-5 flex flex-col">
    <Navbar title={`Back Home`} title1={`Add User`} link={`/`} link1={`/create`}/>
    <h2 className="text-5xl  font-bold border-b-4 border-blue-100 hover:border-blue-400 ">All Users Status</h2>
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-5 ">
          {!users ? <> <Loader/> <Loader/> <Loader/> 
          </> : <>
          {reversedUsers.map((user,index)=>(
            <UserCard key={index} user={user} />
          ))}
          </>} 
        </div>
      </div>
    </>
  )
}

export default AllUsers