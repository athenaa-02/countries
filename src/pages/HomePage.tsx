import CountyCard from "../components/country/CountyCard";
import useCountries from "../hooks/useCountries";
import CountriesLoading from "../components/loaders/CountriesLoading";

function HomePage() {

const {countries, error, loading} = useCountries()

   
  return (
    <>
   {loading && <CountriesLoading></CountriesLoading>} 
    {countries.map((country) =>(
 <CountyCard>{country}</CountyCard>
    ))}
    </>
  )
}

export default HomePage;
