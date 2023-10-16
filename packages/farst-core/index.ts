import installer from './defaults'
export * from '@farst-core/components'
export * from '@farst-core/constants'
export * from '@farst-core/directives'
export * from '@farst-core/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
