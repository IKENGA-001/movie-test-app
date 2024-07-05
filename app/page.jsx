import Image from "next/image";
import Google from "@/components/Google";
import ClientButton from "@/components/clientButton";

export default async function Home() {
  const req = await fetch('https://abundiko-api.vercel.app/api/nigerian-states')
  const res = await req.json();
  const states = res.data.map(i=>`${i.name} ${i.capital}`).join('<br>')
  return (
    <main>
      <ClientButton states={states} />
      <Google/>
    </main>
  );
}
