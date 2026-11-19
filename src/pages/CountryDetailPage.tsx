import useGetCountry from "../hooks/useGetCountry";
import { useParams } from "react-router-dom";
import ReturnBtn from "../components/common/ReturnBtn";

function CountryDetailPage() {
  const { id } = useParams();
  console.log(id);

  const { country, loading, error } = useGetCountry(id);

  console.log(country);

  return (
    <>
      <div>
     <ReturnBtn/>
      </div>
    </>
  );
}

export default CountryDetailPage;
