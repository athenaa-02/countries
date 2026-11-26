import { type UserFormValues } from "../schema/userSchema";
import { supabase } from "../components/lib/supabaseClient";

const FILE_TYPE = 'webp'

export async function registerService(userData: UserFormValues){
    if(!userData.name) return 
    const name = userData.name.split(' ').shift()?.toLowerCase() 
    const fileName = `${name}/avatar.${FILE_TYPE}` 


const {data, error} = await supabase.auth.signUp(userData)

console.log(data, error)
}

// export async function 