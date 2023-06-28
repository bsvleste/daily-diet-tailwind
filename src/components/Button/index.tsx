/* eslint-disable no-undef */
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { IconProps } from 'phosphor-react-native'
import clsx from 'clsx'
export type IconButtonProps = (props: IconProps) => JSX.Element

type ButtonProps = TouchableOpacityProps & {
  icon: IconButtonProps

  background?: 'primary' | 'secundary'
  title: string
}

export function Button({
  icon: Icon,
  background = 'primary',
  title,
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
      <Icon size={24} color={background === 'primary' ? '#fff' : '#1B1D1E'} />
      <Text
        className={clsx('ml-4 font-heading text-sm ', {
          'text-white': background === 'primary',
          'text-gray-800': background === 'secundary',
        })}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
