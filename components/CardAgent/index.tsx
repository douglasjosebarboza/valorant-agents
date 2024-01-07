import Image from 'next/image'
import { druk } from '@/utils/fonts'
import type Agent from '@/types/agent'

export default function CardAgent(agent: Agent) {
  return (
    <a
      className="group relative flex h-[600px] w-[300px] flex-col justify-between fill-transparent grayscale transition-all duration-[0.4s] hover:grayscale-0"
      href="#"
    >
      <div
        className={`${druk.className} textos-estilizados-vertical z-10 ml-2 mt-10 flex flex-col gap-y-1 self-start opacity-50 transition-all duration-[0.4s]  group-hover:opacity-100`}
      >
        <p className="font-normal tracking-[1px] text-[var(--red)]">
          {agent.role.displayName}
        </p>
        <strong className="textos-estilizados-vertical-border text-[42px] font-bold uppercase tracking-[3px] text-transparent">
          {agent.displayName}
        </strong>
      </div>

      <ul className="z-10 flex list-none items-center gap-x-5 self-end rounded-sm border border-solid border-[var(--white)] bg-[var(--black)] p-4">
        {agent.abilities.map(
          (ability) =>
            ability.displayIcon && (
              <li key={ability.displayName}>
                <Image
                  src={ability.displayIcon}
                  width={36}
                  height={36}
                  alt={'Icone da habilidade ' + ability.displayName}
                />
              </li>
            ),
        )}
      </ul>

      <div className="absolute inset-0 m-auto h-[90%] w-[90%] overflow-hidden rounded-xl bg-[var(--black-opacity)] transition-all duration-[0.4s] group-hover:bg-[var(--black)]">
        <span
          className="img-backgroud-agent block h-full w-full bg-no-repeat duration-[0.4s] group-hover:bg-[length:340%]"
          style={{ backgroundImage: `url('${agent.fullPortrait}')` }}
        />
      </div>
    </a>
  )
}
