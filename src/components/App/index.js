// @flow

import React from 'react'
import type { Node as ReactNode } from 'react'

import AntdExtendedSelect from '../AntdExtendedSelect'
import type { ExplanationOption } from '../type'

const options: Array<ExplanationOption> = [
  {
    value: 'option1',
    title: 'Option 1',
    description: 'This is a description for Option 1',
    label: 'Label for Option 1',
  },
  {
    value: 'option2',
    title: 'Option 2',
    description: 'This is a description for Option 2',
    // here you can add all the original props of Option:
    // https://ant.design/components/select/#Option-props
    label: 'Label for Option 2',
  },
]

export default (): ReactNode => (
  <AntdExtendedSelect
    options={options}
    // here you can add all the original props of Select:
    // https://ant.design/components/select/#Select-props
    defaultValue="option2"
    style={{ width: 200 }}
  />
)
