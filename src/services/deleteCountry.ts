import { supabase } from "../components/lib/supabaseClient";
import type { Country } from "../types/country";

export async function deleteCountry(id:string, country:Country){
  console.log(country)
    const {error, data} = await supabase.from('countries').delete().eq('id', id)
    console.log(data, error)


if(error) return



// deleteFlag(country)

}


export async function deleteFlag(country:Country){

    

    const {error, data} = await supabase.storage.from('flags').remove([flag_url])
    console.log(data, error)
}