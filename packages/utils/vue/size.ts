import { componentSizeMap } from '@farst-core/constants'

import type { ComponentSize } from '@farst-core/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
