import { createServerClient } from "./supabase";

export async function getServicesDetail(slug: string) {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching service detail:", error.message);
    throw new Error("Could not fetch service detail");
  }

  return data;
}
