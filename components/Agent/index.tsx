import { druk } from '@/utils/fonts'
import Image from 'next/image'

interface AgentProps {
  agent: {
    role: {
      displayName: string
    }
    displayName: string
    abilities: {
      displayIcon: string
      displayName: string
    }[]
  }
}

export default function Agent({ agent }: AgentProps) {
  return (
    <a
      className="flex h-[600px] w-[300px] flex-col justify-between bg-pink-500"
      href="#"
    >
      <div className={`${druk.className} `}>
        <p className="font-normal tracking-[1px] text-[var(--red)]">
          {agent.role.displayName}
        </p>
        <strong className="textos-estilizados-horizontal text-[42px] font-bold uppercase tracking-[3px] text-transparent">
          {agent.displayName}
        </strong>
      </div>

      <ul className="flex list-none items-center gap-x-5 self-end">
        {agent.abilities.map((ability) => (
          <li key={ability.displayName}>
            <Image
              src={ability.displayIcon}
              width={36}
              height={36}
              alt={'Icone da habilidade ' + ability.displayName}
            />
          </li>
        ))}
      </ul>
    </a>
  )
}
