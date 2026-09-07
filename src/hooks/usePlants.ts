import { useEffect, useState } from 'react'
import { getPlants } from '../services/plantApi'
import type { Plants } from '../types/Plants'

export const usePlants = () => {
  const [plants, setPlants] = useState<Plants[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>()
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await getPlants()
        setPlants(data)
      } catch (error) {
        setError('Failed to fetch plants')
      } finally {
        setLoading(false)
      }
    }
    fetchPlants()
  }, [])
  return {
    plants,
    loading,
    error,
  }
}
