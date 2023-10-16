import { withInstall } from '@farst-core/utils'
import TemplateCollector from './src/template-collector.vue'

export const FarstTemplateCollector = withInstall(TemplateCollector)
export default FarstTemplateCollector

export * from './src/template-collector'
