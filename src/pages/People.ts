import { Lightning } from '@lightningjs/sdk'
import { Grid } from '@lightningjs/ui'
import { getNextPeople, getPeople, PeopleResponse, PersonObject } from '../services/people'
import BasePage from './BasePage'
import { navigateToPerson } from '../config/routes'

export default class People extends BasePage {
  private peopleData: PeopleResponse | undefined

  static _template() {
    return {
      ...super._template(),
      List: {
        type: Grid,
        x: 100,
        y: 100,
        w: 1720,
        h: 880,
        spacing: 50,
        enableRequests: true,
        signals: {
          onRequestItems: true,
        },
      },
    }
  }

  get List() {
    return this.tag('List')
  }

  convertPersonToElement(person: PersonObject): PersonItem {
    return {
      type: PersonItem,
      name: person.name,
      action: () => navigateToPerson(person),
    }
  }

  async preparePeople(): Promise<void> {
    this.peopleData = await getPeople()
    this.List.add(this.peopleData.results.map(this.convertPersonToElement))
  }

  async onRequestItems(): Promise<PersonItem[] | undefined> {
    this.peopleData = await getNextPeople(this.peopleData!)
    return this.peopleData?.results.map(this.convertPersonToElement)
  }

  _getFocused() {
    return this.List
  }
}

class PersonItem extends Lightning.Component {
  name = ''
  action: () => void = () => {}

  static get width() {
    return 300
  }

  static get height() {
    return 200
  }

  static _template() {
    return {
      w: 300,
      h: 200,
      rect: true,
      color: 0x00ffffff,
      Text: {
        w: 250,
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        text: {
          text: this.bindProp('name'),
          textAlign: 'center',
          wordWrapWidth: 250,
        },
      },
    }
  }

  _focus?() {
    this.patch({
      color: 0x80ffffff,
    })
  }

  _unfocus?() {
    this.patch({
      color: 0x00000000,
    })
  }

  _handleEnter?() {
    this.action()
  }
}
