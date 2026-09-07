import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const headersList = await headers();
  const language = headersList.get("accept-language") || "";

  console.log("ACCEPT-LANGUAGE:", language);

  if (language.toLowerCase().includes("id")) {
    redirect("/id");
  }

  redirect("/en");
}
