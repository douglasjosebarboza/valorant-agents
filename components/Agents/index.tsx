'use client'
import CardAgent from '../CardAgent'
import Agent from '@/types/agent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import 'swiper/css'

export default function Agents() {
  const [agents, setAgents] = useState<Agent[]>([])
  const LoadAgents = async () => {
    const route = 'https://valorant-api.com/v1/agents?language=pt-BR'
    const response = await fetch(route).then((data) => data.json())
    const data = response.data as Agent[]
    setAgents(data.filter((agents) => agents.fullPortrait))
  }

  useEffect(() => {
    LoadAgents()
  }, [])
  return (
    <Swiper spaceBetween={16} slidesPerView={4}>
      {agents.map((agent) => (
        <SwiperSlide key={agent.displayName}>
          <CardAgent {...agent} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
