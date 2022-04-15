import BasePage from './BasePage'
import { PersonObject } from '../services/people'

export default class Person extends BasePage {
  person?: PersonObject

  static _template() {
    return {
      ...super._template(),
      Wrapper: {
        mount: 0.5,
        w: 700,
        h: 500,
        x: w => w / 2,
        y: h => h / 2,
        flex: {
          direction: 'column',
        },
        Name: {
          w: 700,
          text: {
            text: super.bindProp('person', (self: Person) => self.person?.name),
            wordWrapWidth: 500,
            textAlign: 'center',
          },
        },
        BirthYear: {
          w: 700,
          text: {
            text: super.bindProp('person', (self: Person) => `Birth year: ${self.person?.birth_year}`),
            wordWrapWidth: 500,
            fontSize: 24,
            textAlign: 'center',
          },
        },
        Height: {
          w: 700,
          text: {
            text: super.bindProp('person', (self: Person) => `Height: ${self.person?.height}`),
            wordWrapWidth: 500,
            fontSize: 24,
            textAlign: 'center',
          },
        },
        Gender: {
          w: 700,
          text: {
            text: super.bindProp('person', (self: Person) => `Gender: ${self.person?.gender}`),
            wordWrapWidth: 500,
            fontSize: 24,
            textAlign: 'center',
          },
        },
      },
    }
  }

  setPerson(person: PersonObject): void {
    this.person = person
  }
}
