/* eslint-disable no-undef */
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { IconProps } from 'phosphor-react-native'
import clsx from 'clsx'
import colors from 'tailwindcss/colors'
export type IconButtonProps = (props: IconProps) => JSX.Element

type ButtonProps = TouchableOpacityProps & {
  icon: IconButtonProps
  hasIcon?: boolean
  background?: 'primary' | 'secundary'
  title: string
}

export function Button({
  icon: Icon,
  background = 'primary',
  title,
  hasIcon = false,
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
      {hasIcon && (
        <Icon
          size={24}
          color={background === 'primary' ? colors.white : '#1B1D1E'}
        />
      )}
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
