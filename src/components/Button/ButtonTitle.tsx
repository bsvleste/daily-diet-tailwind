import clsx from 'clsx'
import { Text } from 'react-native'
type ButtonTitleProps = {
  background?: 'primary' | 'secundary'
  title: string
}
export function ButtonTitle({
  background = 'primary',
  title,
}: ButtonTitleProps) {
  return (
    <>
      <Text
        className={clsx('ml-4 font-heading text-sm ', {
          'text-white': background === 'primary',
          'text-gray-800': background === 'secundary',
        })}
      >
        {title}
      </Text>
    </>
  )
}
