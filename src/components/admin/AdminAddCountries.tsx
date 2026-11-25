import { type CountryFormValues } from "../../schema/countrySchema";
import { countrySchema, REGIONS } from "../../schema/countrySchema";
import { supabase } from "../lib/supabaseClient";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

function AdminAddCountries() {
  const [preview, setPreview] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CountryFormValues>({ resolver: yupResolver(countrySchema) });

  function onSubmit() {}

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8 w-[60%] min-w-82.5 max-w-162.5 m-auto">
          <div>
            <label htmlFor="name" className="text-sm text-[#666666]">
              country name:
            </label>
            <input
              type="text"
              id="name"
              className="border border-[#CCC] w-full h-14 "
              {...register("name")}
            />
            <div className="h-3">
              {errors.name && (
                <p className="text-red-600"> {errors.name.message}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="official_name" className="text-sm text-[#666666]">
              official name:
            </label>
            <input
              type="text"
              id="official_name"
              className="border border-[#CCC] w-full h-14 "
              {...register("official_name")}
            />
            <div className="h-3">
              {errors.official_name && (
                <p className="text-red-600"> {errors.official_name.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="alpha_2" className="text-sm text-[#666666]">
              first alphabet 2 letters:
            </label>
            <input
              type="text"
              id="alpha_2"
              className="border border-[#CCC] w-full h-14 "
              {...register("alpha_2")}
            />
            <div className="h-3">
              {errors.alpha_2 && (
                <p className="text-red-600"> {errors.alpha_2.message}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="alpha_3" className="text-sm text-[#666666]">
              first alphabet 3 letters:
            </label>
            <input
              type="text"
              id="alpha_3"
              className="border border-[#CCC] w-full h-14 "
              {...register("alpha_3")}
            />
            <div className="h-3">
              {errors.alpha_3 && (
                <p className="text-red-600"> {errors.alpha_3.message}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="capital" className="text-sm text-[#666666]">
              Capital city:
            </label>
            <input
              type="text"
              id="capital"
              className="border border-[#CCC] w-full h-14 "
              {...register("capital")}
            />
            <div className="h-3">
              {errors.capital && (
                <p className="text-red-600"> {errors.capital.message}</p>
              )}
            </div>
          </div>

          <div>
            <select
              {...register("region")}
              defaultValue=""
              className="text-md  text-[#666666] border border-[#CCC] w-25 h-14"
            >
              <option value="" disabled>
                Region:
              </option>
              {REGIONS.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <div className="h-3">
              {errors.region && (
                <p className="text-red-600"> {errors.region.message}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="subregion" className="text-sm text-[#666666]">
              Sub region
            </label>
            <input
              type="text"
              id="subregion"
              className="border border-[#CCC] w-full h-14 "
              {...register("subregion")}
            />
            <div className="h-3">
              {errors.subregion && (
                <p className="text-red-600"> {errors.subregion.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="population" className="text-sm text-[#666666]">
              population:
            </label>
            <input
              type="number"
              id="population"
              className="border border-[#CCC] w-full h-14 "
              {...register("population")}
            />
            <div className="h-3">
              {errors.population && (
                <p className="text-red-600"> {errors.population.message}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex w-full h-44.5 items-start gap-10">
              <div className="flex flex-col h-full py-4 justify-between ">
                <label
                  htmlFor="flag"
                  className="bg-blue-300 rounded px-5 py-2 cursor-pointer"
                >
                  upload flag
                </label>
                <input
                  type="file"
                  id="flag"
                  className="hidden "
                  {...register("flag")}
                  onChange={(e) => {
                    const file = e.target.files![0];
                    const url = URL.createObjectURL(file);
                    setPreview(url);
                  }}
                />
                <button onClick={() => setPreview(null)} className="bg-gray-300 p-1 rounded cursor-pointer">
                  clear
                </button>
              </div>
              <div className="w-70.5 h-44.5">
                {preview ? (
                  <img
                    src={preview ?? undefined}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                ) : (
                  <img
                    src="/placeholder.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="h-3">
              {errors.flag && (
                <p className="text-red-600"> {errors.flag.message}</p>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-300 p-4 rounded cursor-pointer"
            >
              upload country
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AdminAddCountries;
