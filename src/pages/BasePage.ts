import { Lightning, Utils } from '@lightningjs/sdk'

export default class BasePage extends Lightning.Component {
  static _template(): Record<string, unknown> {
    return {
      w: 1920,
      h: 1080,
      Background: {
        w: w => w,
        h: h => h,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
      },
    }
  }
}
