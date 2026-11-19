import useGetCountry from "../hooks/useGetCountry"
import { useParams } from "react-router-dom"

function CountryDetailPage() {
  const {id} = useParams()
  console.log(id)

  const {country, loading, error} = useGetCountry(id)

console.log(country)

  return (
    <div>CountryDetailPage</div>
  )
}

export default CountryDetailPage