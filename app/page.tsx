import { NavigationMenuDemo } from "@/components/nav/nav";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Work from "@/public/work2.png";
import Work2 from "@/public/work3.png";
import Work3 from "@/public/work4.png";

export default function Home() {
  return (
    <>
      <div className="bg-[#6200EA] h-[60px] flex justify-center items-center text-white">
        <p className="text-lg">Travail pédagogique sans objectifs commerciaux</p>
      </div>
      <div className="flex justify-center py-2 border-b border-black">
        <NavigationMenuDemo />
      </div>
      <header className="py-4 bg-[#FFFFF0] flex justify-between px-[200px] items-center">
        <Image src={Work} alt="work" width={500} />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Des compétences d&apos;aujourd&apos;hui qui ont de l&apos;avenir</h1>
          <p className="text-md">Notre différence ? Une école 100% en ligne et un modèle pédagogique unique qui seront les clés de votre réussite.</p>
        </div>
      </header>
      <div className="flex justify-center mt-[-20px]">
        <Button variant="default">Commencer dès maintenant</Button>
      </div>
      <main>
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-3xl mt-[100px] font-bold">Savoir. Faire. Savoir-faire.</h2>
          <p className="font-light text-md text-center">Avec OpenClassrooms, découvrez une nouvelle façon d&apos;apprendre : 20% de théorie, 80% de pratique.</p>
        </div>
        <div className="flex justify-center items-center gap-[200px] mt-[50px]">
          <div className="flex flex-col gap-2 items-center">
            <Image src={Work2} alt="work2" width={350} className="bg-[#FFFFF0] rounded-full" />
            <p className="text-center font-bold text-xl">Apprenez <br />
              où que vous soyez</p>
              <p className="text-md text-center">Accédez à votre formation 100% en ligne au bureau, à la maison,<br/> en ville, à la montagne... Partout !</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={Work3} alt="work3" width={350} className="bg-[#FFFFF0] rounded-full" />
            <p className="text-center font-bold text-xl">
              Un mentor <br />
              pour vous accompagner
            </p>
            <p className="text-md text-center">Réalisez des projets concrets, issus de scénarios métiers,<br/> directement applicables dans le monde du travail.</p>
          </div>
        </div>
      </main>
    </>
  );
}
