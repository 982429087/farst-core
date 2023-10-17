import { buildProps, definePropType } from '@farst-core/utils'
import type { ExtractPropTypes } from 'vue'
import type RendererComponent from './renderer.vue'

export const rendererProps = buildProps({
  data: {
    type: definePropType<RendererData[]>(Array),
    default: () => [],
  },
})
export const rendererEmits = {}

export type RendererEmits = typeof rendererEmits
export type RendererProps = ExtractPropTypes<typeof rendererProps>
export type RendererInstance = InstanceType<typeof RendererComponent>

export type RendererData = {
  id: string | number
  type: string
  [key: string]: any
}
