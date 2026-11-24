import { Link } from "react-router-dom"

function AdminMain() {
  return (
    <>
    <div className="flex w-full h-20 justify-around items-center">
        <Link to={"/admin-panel/countries"}>Countries list</Link>
        <Link to={"/admin-panel/users"}>Users list</Link>
        <Link to={"/admin-panel/add-country"}>
        <button className="bg-green-300 rounded px-5 py-2 cursor-pointer">add country</button>
        </Link>

    
    </div>
    </>
  )
}

export default AdminMain