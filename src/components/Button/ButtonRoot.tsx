/* eslint-disable no-undef */

import { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { IconProps } from 'phosphor-react-native'
import clsx from 'clsx'
export type IconButtonProps = (props: IconProps) => JSX.Element

type ButtonProps = TouchableOpacityProps & {
  background?: 'primary' | 'secundary'
  children: ReactNode
}

export function ButtonRoot({
  background = 'primary',
  children,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={clsx('h-14  flex-row items-center justify-center rounded-lg', {
        'bg-gray-800': background === 'primary',
        'border-2 border-gray-800 bg-white': background === 'secundary',
      })}
      {...props}
    >
      {children}
    </TouchableOpacity>
  )
}
