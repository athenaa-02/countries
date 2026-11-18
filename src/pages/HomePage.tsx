import CountyCard from "../components/country/CountyCard";
import useCountries from "../hooks/useCountries";

function HomePage() {

const {countries, error, loading} = useCountries()

   console.log(countries)
  return (
    <>
    {countries.map((country) =>(
 <CountyCard>{country}</CountyCard>
    ))}
    </>
  )
}

export default HomePage;
