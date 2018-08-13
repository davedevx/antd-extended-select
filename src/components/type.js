// @flow

import type { Node as ReactNode } from 'react'

export type ExplanationOption = {
  value: string,
  title: ReactNode | string,
  description: ReactNode | string,
}
