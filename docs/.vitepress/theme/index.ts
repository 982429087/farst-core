import ElementPlus from 'element-plus'
import farstCore from '@farst/core'

import VPApp, { NotFound, globals } from '../vitepress'
import { define } from '../utils/types'
import 'uno.css'
import './style.css'
import type { Theme } from 'vitepress'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
    app.use(farstCore)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
