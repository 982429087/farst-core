// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    FarstButton: typeof import('../packages/farst-core')['FarstButton']
  }
}

export {}
