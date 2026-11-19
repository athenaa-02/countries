import { useState, useEffect } from "react";
import { supabase } from "../components/lib/supabaseClient";
import type { Country } from "../types/country";

function useGetCountry(id?: string) {
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function getCountry() {
      try {
        const { data, error } = await supabase
          .from("countries")
          .select("*")
          .eq("id", id)
          .maybeSingle();

        if (!data) return;
        if (error) {
          throw error;
        }

        setCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getCountry();
  }, []);

  return { country, error, loading };
}

export default useGetCountry;
