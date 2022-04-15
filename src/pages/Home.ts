import { Router } from '@lightningjs/sdk'
import { ROUTES } from '../config/routes'
import BasePage from './BasePage'

export default class Home extends BasePage {
  static _template() {
    return {
      ...super._template(),
      Welcome: {
        mount: 0.5,
        x: 960,
        y: 400,
        text: {
          text: 'Welcome to the\nSTAR WARS\npeople index',
          fontFace: 'Regular',
          fontSize: 100,
          textColor: 0xffffffff,
          textAlign: 'center',
        },
      },
      Press: {
        mount: 0.5,
        x: 960,
        y: 700,
        text: {
          text: 'Click enter to go to a galaxy far, far away...',
          fontFace: 'Regular',
          fontSize: 54,
          textColor: 0xffffffff,
          textAlign: 'center',
        },
      },
    }
  }

  _handleEnter() {
    Router.navigate(ROUTES.PEOPLE)
  }
}
