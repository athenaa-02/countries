import { supabase } from "../components/lib/supabaseClient";
import { useState, useEffect } from "react";
import type { Country } from "../types/country";
import CountyCard from "../components/country/CountyCard";

function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function getCountries() {
      try {
      const {data , error} = await supabase.from('countries').select('*')

      if(!data) return
      if(error){
        throw error
      }

    setCountries(data)
   

      } catch (error) {
        console.log(error);
      }
    }
    getCountries()
  }, []);



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
