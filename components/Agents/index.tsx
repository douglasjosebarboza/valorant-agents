'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import { LoadAgents } from '@/utils/loadAgents'
import CardAgent from '../CardAgent'
import Agent from '@/types/agent'
import 'swiper/css'

export default function Agents() {
  const [agents, setAgents] = useState<Agent[]>([])

  const LoadData = async () => {
    const data = await LoadAgents()
    setAgents(data)
  }

  useEffect(() => {
    LoadData()
  }, [])

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        650: { slidesPerView: 2 },
        935: { slidesPerView: 3 },
        1330: { slidesPerView: 4 },
      }}
    >
      {agents.map((agent) => (
        <SwiperSlide key={agent.displayName}>
          <CardAgent {...agent} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
