import { withInstall } from '@farst-core/utils'
import Renderer from './src/renderer.vue'

export const FarstCollection = withInstall(Renderer)
export default FarstCollection

export * from './src/renderer'
export * from './src/ctx'
