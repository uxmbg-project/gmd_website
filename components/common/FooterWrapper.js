import Footer from "./Footer";

export default async function FooterWrapper() {
  const ip = headers().get("x-forwarded-for") || "8.8.8.8"; // fallback for local dev
  
  const res = await fetch(`https://ipapi.co/${ip}/json/`, { cache: "no-store" });
  const data = await res.json();

  const region = data.region || "WA"; // default fallback

  return <Footer region={region} />;
}
