import { dateZhCN, zhCN } from 'naive-ui'
import global from './global/zh-CN'
import page from './pages/zh-CN'

export default {
  ...global,
  ...page,
  naiveUI: {
    locale: zhCN,
    dateLocale: dateZhCN,
  },
}
