import { dateEnUS, enUS } from 'naive-ui'
import global from '../global/en-US'
import page from '../pages/en-US'

export default {
  ...global,
  ...page,
  naiveUI: {
    locale: enUS,
    dateLocale: dateEnUS,
  },
}
