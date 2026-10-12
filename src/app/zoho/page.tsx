import { redirect } from "next/navigation";

// Zoho content now lives on the canonical service page.
export default function ZohoRedirect() {
  redirect("/services/zoho-development");
}
