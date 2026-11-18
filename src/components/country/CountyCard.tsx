import type { Country } from "../../types/country"


function CountyCard({ children }: { children: Country }) {
    const {id, name, alpha_2, alpha_3, capital, flag_url, official_name, population, region, subregion } = children
  return (
    <>
    <div className="card w-66 h-84 ">
        <div>
            <img className="w-66 h-40" src={flag_url} alt={name} />
        </div>
        <div>
            <h2>
                {official_name}
            </h2>
            <div>
                <span>Population:{population}</span>
                <span>Region:{region}</span>
                <span>Capital:{capital}</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default CountyCard