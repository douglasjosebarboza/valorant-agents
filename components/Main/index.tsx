import { druk } from '@/utils/fonts'
import Image from 'next/image'
export default function Main() {
  return (
    <main className="mx-auto my-0 flex w-full max-w-7xl items-center pb-10">
      <div className="relative mr-6">
        <Image
          className="absolute bottom-0 right-0"
          src="/background-logo.svg"
          width={140}
          height={99}
          alt="Logo de background do Valorant"
        />

        <h1
          className={`${druk.className} textos-estilizados ml-8 text-7xl tracking-[12px] text-transparent`}
        >
          AGENTES
        </h1>
      </div>

      <div className="flex-1 bg-blue-800">Listagens dos personagens</div>
    </main>
  )
}
