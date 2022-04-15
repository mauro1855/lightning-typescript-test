import { ApiPagedResponse, fetchData, fetchNextPage, fetchPagedData, LinkedObject } from './api'

// API documentation in https://swapi.dev
const API_URL = 'https://swapi.dev/api/planets/'

export type PlanetObject = LinkedObject & {
  name: string
  rotation_period: string
  orbital_period: string
}

export type PlanetResponse = ApiPagedResponse<PlanetObject>

export async function getPlanets(): Promise<PlanetResponse> {
  return await fetchPagedData<PlanetObject>(API_URL)
}

export async function getNextPlanets(currentPage: PlanetResponse): Promise<PlanetResponse | undefined> {
  return await fetchNextPage(currentPage)
}

export async function getPlanet(planetId: number): Promise<PlanetResponse> {
  return await fetchData(`${API_URL}/${planetId}`)
}

export function getPersonId(p: PlanetObject): number {
  return Number(p.url.split(API_URL)[1].replace('/', ''))
}
