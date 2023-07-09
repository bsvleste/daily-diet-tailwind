/* eslint-disable no-undef */
import { IconProps } from 'phosphor-react-native'
import colors from 'tailwindcss/colors'

export type IconButtonProps = (props: IconProps) => JSX.Element
type ButtonIconProps = {
  icon: IconButtonProps
  background?: 'primary' | 'secundary'
}
export function ButtonIcon({
  icon: Icon,
  background = 'primary',
}: ButtonIconProps) {
  return (
    <>
      <Icon
        size={24}
        color={background === 'primary' ? colors.white : '#1B1D1E'}
      />
    </>
  )
}
