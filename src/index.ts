import { Launch } from '@lightningjs/sdk'
import App from './App'

export default function(...args: never[]) {
  return Launch(App, ...args)
}
