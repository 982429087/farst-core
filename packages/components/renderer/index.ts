import { withInstall } from '@farst-core/utils'
import Renderer from './src/renderer.vue'

export const FarstRenderer = withInstall(Renderer)
export default FarstRenderer

export * from './src/renderer'
export * from './src/ctx'
