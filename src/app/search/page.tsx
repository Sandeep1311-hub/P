import { redirect } from "next/navigation";

export default function SearchPage() {
  // Redirecting to home since search is disabled.
  redirect("/");
}