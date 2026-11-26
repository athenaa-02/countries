import { type UserFormValues } from "../schema/userSchema";
import { supabase } from "../components/lib/supabaseClient";

const FILE_TYPE = "webp";

export async function registerService(userData: UserFormValues) {
  // if(!userData.name) return
  // const name = userData.name.split(' ').shift()?.toLowerCase()
  const fileName = `${userData.name}/avatar.${FILE_TYPE}`;

  const { data, error } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
    options:{
        data:{ name:userData.name, gender: userData.gender,  }
    }
  });

  console.log(data, error);

  const url = await uploadAvatar(fileName, userData.avatar[0]);
}

export async function uploadAvatar(fileName: string, image: File) {
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(fileName, image);

  if (error) {
    console.log(error.message);
    throw error;
  }

  const { data: urlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(data.path);

  return urlData.publicUrl;
}
