import type { Plants } from '../types/Plants'
interface PlantResponse {
  status: boolean
  message: string
  plants: Plants[]
}
export const getPlants = async (): Promise<Plants[]> => {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/plants`
    )
    if (!response.ok) {
      throw new Error('Failed to fetch plants')
    }
    const data: PlantResponse = await response.json()
    return data.plants
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : 'Something went wrong')
  }
}
