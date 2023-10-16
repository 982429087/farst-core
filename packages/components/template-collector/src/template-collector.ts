import { buildProps, definePropType } from '@farst-core/utils'
import type { ExtractPropTypes } from 'vue'
import type TemplateCollectorComponent from './template-collector.vue'

export const templateCollectorProps = buildProps({
  type: {
    type: definePropType<string>(String),
  },
})
export const templateCollectorEmits = {}

export type TemplateCollectorEmits = typeof templateCollectorEmits
export type TemplateCollectorProps = ExtractPropTypes<
  typeof templateCollectorProps
>
export type TemplateCollectorInstance = InstanceType<
  typeof TemplateCollectorComponent
>
