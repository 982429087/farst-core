import { shallowReactive } from 'vue'
export class RendererCollections {
  collections: Record<string, any> = shallowReactive({})
  set(type: string, template: any) {
    this.collections[type] = template
  }
}
