import { type CountryFormValues } from "../../schema/countrySchema";
import { countrySchema, REGIONS } from "../../schema/countrySchema";
import { supabase } from "../lib/supabaseClient";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function AdminAddCountries() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CountryFormValues>({ resolver: yupResolver(countrySchema) });

  function onSubmit() {}

  return (
    <>
      <form onSubmit={() => onSubmit}>
        <div>
          <label htmlFor="name">country name:</label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div>
          <label htmlFor="official_name">official name:</label>
          <input
            type="text"
            id="official_name"
            {...register("official_name")}
          />
        </div>

        <div>
          <label htmlFor="alpha_2">first alphabet 2 letters:</label>
          <input type="text" id="alpha_2" {...register("alpha_2")} />
        </div>
        <div>
          <label htmlFor="alpha_3">first alphabet 3 letters:</label>
          <input type="text" id="alpha_3" {...register("alpha_3")} />
        </div>
        <div>
          <label htmlFor="capital">Capital city:</label>
          <input type="text" id="capital" {...register("capital")} />
        </div>

        <div>
          <select {...register("region")} defaultValue="">
            <option value="" disabled>
              Region:
            </option>
            {REGIONS.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="subregion">Sub region</label>
          <input type="text" id="subregion" {...register("subregion")} />
        </div>

        <div>
          <label htmlFor="population">population:</label>
          <input type="number" id="population" {...register("population")} />
        </div>

        <div>
          <label htmlFor="flag_url">flag_url:</label>
          <input type="file" id="flag_url" {...register("flag_url")} />
        </div>
      </form>
    </>
  );
}

export default AdminAddCountries;
