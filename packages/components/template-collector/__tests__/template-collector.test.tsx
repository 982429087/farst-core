import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TemplateCollector from '../src/template-collector.vue'

const AXIOM = 'Just test world'

describe('TemplateCollector.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <TemplateCollector>{AXIOM}</TemplateCollector>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
