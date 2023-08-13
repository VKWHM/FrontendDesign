import Header from "@/components/Header";
import MegaMenu from "@/components/MegaMenu";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main className="font-caveat">
        <Header>
            <MegaMenu />
        </Header>
        <Landing />
    </main>
  )
}
