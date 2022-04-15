import { ApiPagedResponse, fetchData, fetchNextPage, fetchPagedData, LinkedObject } from './api'

// API documentation in https://swapi.dev
const API_URL = 'https://swapi.dev/api/people/'

export type PersonObject = LinkedObject & {
  name: string
  height: string
  birth_year: string
  gender: string
}

export type PeopleResponse = ApiPagedResponse<PersonObject>

export async function getPeople(): Promise<PeopleResponse> {
  return await fetchPagedData<PersonObject>(API_URL)
}

export async function getNextPeople(currentPage: PeopleResponse): Promise<PeopleResponse | undefined> {
  return await fetchNextPage(currentPage)
}

export async function getPerson(personId: number): Promise<PersonObject> {
  return await fetchData(`${API_URL}/${personId}`)
}

export function getPersonId(p: PersonObject): number {
  return Number(p.url.split(API_URL)[1].replace('/', ''))
}
