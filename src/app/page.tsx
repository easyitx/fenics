import { redirect } from "next/navigation";
import { fallbackLng } from "@/app/i18n/settings";

export default function RootPage() {
  redirect(`/${fallbackLng}`);
}
