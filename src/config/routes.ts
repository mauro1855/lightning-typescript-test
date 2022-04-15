import { Router } from '@lightningjs/sdk'
import Home from '../pages/Home'
import People from '../pages/People'
import { getPerson, getPersonId, PersonObject } from '../services/people'
import Person from '../pages/Person'

export const ROUTES: Record<string, string> = {
  HOME: 'home',
  PEOPLE: 'people',
  PERSON: 'people/:id',
}

export function navigateToPerson(person: PersonObject): void {
  const route = ROUTES.PERSON.replace(':id', getPersonId(person).toString())
  Router.navigate(route, { person })
}

export const routerConfiguration = {
  root: ROUTES.HOME,
  routes: [
    {
      path: ROUTES.HOME,
      component: Home,
    },
    {
      path: ROUTES.PEOPLE,
      component: People,
      on: async (page: People): Promise<void> => {
        await page.preparePeople()
      },
    },
    {
      path: ROUTES.PERSON,
      component: Person,
      on: async (page: Person, { id, person }: { id: number; person?: PersonObject }): Promise<void> => {
        const handledPerson = person ?? (await getPerson(id))
        page.setPerson(handledPerson)
      },
    },
  ],
}
