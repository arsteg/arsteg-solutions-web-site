import { redirect } from "next/navigation";

// Digital marketing content now lives on the canonical service page.
export default function DigitalMarketingRedirect() {
  redirect("/services/digital-marketing-growth");
}
