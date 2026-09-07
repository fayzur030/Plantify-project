import { useEffect, useState } from 'react'
import { getPlants } from '../services/plantApi'
import type { Plants } from '../types/Plants'

export const usePlants = () => {
  const [plants, setPlants] = useState<Plants[]>([])
  useEffect(() => {
    const fetchPlants = async () => {
      const data = await getPlants()
      setPlants(data)
    }
    fetchPlants()
  }, [])
  return plants
}
