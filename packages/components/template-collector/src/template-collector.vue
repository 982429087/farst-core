<script lang="ts">
import { defineComponent, inject } from 'vue'
import {
  templateCollectorEmits,
  templateCollectorProps,
} from './template-collector'
import type { RendererCollections } from '@farst-core/components/renderer'

export default defineComponent({
  name: 'FarstTemplateCollector',
  props: templateCollectorProps,
  emits: templateCollectorEmits,
  setup(props, { slots }) {
    const collection = inject<RendererCollections>('collections')
    if (!collection) {
      throw new Error('template-collector must be used after renderer')
    }
    if (!props.type) {
      throw new Error('template-collector must have a type')
    }
    collection.set(props.type, slots.default)
    return () => null
  },
})
</script>
