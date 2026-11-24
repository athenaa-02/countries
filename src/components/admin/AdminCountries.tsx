import useCountries from "../../hooks/useCountries";
import CountyCard from "../country/CountyCard";
import DeleteModal from "../common/DeleteModal";

function AdminCountries() {
  const { countries, error, loading } = useCountries();


  console.log(countries);


  

  return (
    <>
    <div className="flex flex-wrap gap-20">
        
      {countries.map((country) => (
        <div><CountyCard>{country}</CountyCard>
       <button className="bg-red-500 rounded cursor-pointer px-2">delete</button>
       </div> 
      ))}
      
      </div>
      <DeleteModal></DeleteModal>
    </>
  );
}

export default AdminCountries;
