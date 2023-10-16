<script lang="ts">
import { computed, defineComponent, provide } from 'vue'
import { rendererEmits, rendererProps } from './renderer'
import { RendererCollections } from './ctx'
export default defineComponent({
  name: 'FarstRenderer',
  props: rendererProps,
  emits: rendererEmits,
  setup(props, { slots }) {
    const collection = new RendererCollections()
    provide('collections', collection)
    const dataCp = computed(() => props.data)
    return () => [
      slots.default?.(),
      ...dataCp.value.map((item) => {
        return collection.collections[item.type]?.({ data: item })
      }),
    ]
  },
})
</script>
