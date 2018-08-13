// @flow

import React from 'react'
import { Select } from 'antd'
import type { Node as ReactNode } from 'react'

import './style.less'
import type { ExplanationOption } from '../type'

type Props = {
  options: Array<ExplanationOption>,
}

const renderOption = (option: ExplanationOption, index: number): ReactNode => {
  const {
    value,
    title,
    description,
    ...otherOptionProps
  } = option

  return (
    <Select.Option
      key={index}
      value={option.value}
      {...otherOptionProps}
    >
      <div className="antd-extended-select__option">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </Select.Option>
  )
}

export default (props: Props): ReactNode => {
  const { options, ...otherSelectProps } = props

  return (
    <div className="antd-extended-select">
      <Select {...otherSelectProps}>
        {
          options.map(renderOption)
        }
      </Select>
    </div>
  )
}
