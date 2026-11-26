import useCountries from "../../hooks/useCountries";
import CountyCard from "../country/CountyCard";
import DeleteModal from "../common/DeleteModal";
import { useState } from "react";
import type { Country } from "../../types/country";

function AdminCountries() {
  const { countries, error, loading } = useCountries();
  const [onDelete, setOnDelete] = useState<boolean>(false);
  const [countryToDelete, setCountryToDelete] = useState<Country | null>(null);

  console.log(countryToDelete);

  return (
    <>
      <div className="flex flex-wrap gap-20">
        {countries.map((country) => (
          <div>
            <CountyCard>{country}</CountyCard>
            <button
              onClick={() => {
                setOnDelete(true);
                setCountryToDelete(country);
              }}
              className="bg-red-500 rounded cursor-pointer px-2"
            >
              delete
            </button>
          </div>
        ))}
      </div>
      {onDelete && countryToDelete && (
        <DeleteModal
          open={{ onDelete, setOnDelete, countryToDelete }}
        />
      )}
    </>
  );
}

export default AdminCountries;
