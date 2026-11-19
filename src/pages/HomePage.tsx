import CountyCard from "../components/country/CountyCard";
import useCountries from "../hooks/useCountries";
import CountriesLoading from "../components/loaders/CountriesLoading";
import { Link } from "react-router-dom";

function HomePage() {
  const { countries, error, loading } = useCountries();

  return (
    <>
      {loading && <CountriesLoading></CountriesLoading>}
      <div className="w-full flex flex-wrap px-13.75 md:px-20 mt-7 md:mt-12 gap-10 md:gap-18.75 justify-center">
        {countries.map((country) => (
          <Link to={`/country-details/${country.id}`} key={country.id}>
            <CountyCard>{country}</CountyCard>
          </Link>
        ))}
      </div>
    </>
  );
}

export default HomePage;
