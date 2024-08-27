import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      {/*header*/}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Alberto</h2>
        <p>Segunda, 27 de Agosto</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src={"/banner.png"}
            alt="Banner principal"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="agendamentos mt-6">
          <h1 className="mb-6">Agendamentos</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
