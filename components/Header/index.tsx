import { Triangle } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full bg-[var(--black)] p-8">
      <div className="mx-auto my-0 flex w-full max-w-7xl items-center gap-x-8 text-[var(--white)]">
        <Image
          className="hidden lg:block"
          src="/riot-games.svg"
          width={52}
          height={26}
          alt="Logo da Riot Games"
        />
        <span className="hidden h-10 w-[2px] bg-[var(--white)] lg:block" />

        <Image
          className="hidden lg:block"
          src="/valorant.svg"
          width={32}
          height={26}
          alt="Logo do Valorant"
        />

        <nav className="sm: ml-2 flex flex-wrap items-center gap-x-5 gap-y-3 text-center text-xs font-bold tracking-[0.3px] sm:gap-y-0 md:ml-5 md:gap-x-10 md:text-sm">
          <a href="#">GAME</a>
          <a href="#">CHAMPIONS</a>
          <a href="#">NEWS</a>
          <a href="#">PATCH NOTES</a>
          <a href="#">SHOP</a>
          <a href="#">SUPPORT</a>
        </nav>

        <div className="ml-auto mr-8 flex items-center gap-x-3">
          <picture className="relative h-12 w-12 overflow-hidden rounded-[48px]">
            <Image
              className="object-cover"
              src="/avatar.jpg"
              width={48}
              height={48}
              alt="Imagem de perfil"
            />
          </picture>

          <strong className="hidden text-xs lg:block">SilenT</strong>

          <Triangle
            className="hidden rotate-180 lg:block"
            size={8}
            weight="fill"
          />
        </div>
      </div>
    </header>
  )
}
