import useCountries from "../../hooks/useCountries";
import CountyCard from "../country/CountyCard";
import DeleteModal from "../common/DeleteModal";
import { useState } from "react";

function AdminCountries() {
  const { countries, error, loading } = useCountries();
const [onDelete, setOnDelete] = useState(false)


console.log(onDelete)

  return (
    <>
    <div className="flex flex-wrap gap-20">
        
      {countries.map((country) => (
        <div><CountyCard>{country}</CountyCard>
       <button onClick={() => setOnDelete(true)} className="bg-red-500 rounded cursor-pointer px-2">delete</button>
       </div> 
      ))}
      
      </div>
      {onDelete && <DeleteModal></DeleteModal>}
    </>
  );
}

export default AdminCountries;
