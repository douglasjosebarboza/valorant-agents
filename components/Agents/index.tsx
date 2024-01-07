'use client'
import CardAgent from '../CardAgent'
import Agent from '@/types/agent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import 'swiper/css'
import { LoadAgents } from '@/utils/loadAgents'

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
    <Swiper spaceBetween={16} slidesPerView={4}>
      {agents.map((agent) => (
        <SwiperSlide key={agent.displayName}>
          <CardAgent {...agent} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
