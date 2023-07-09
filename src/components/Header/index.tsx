import { View, Text, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import clsx from 'clsx'
import { ArrowLeft } from 'phosphor-react-native'
import colors from 'tailwindcss/colors'
import { useNavigation } from '@react-navigation/native'
type HeaderProps = {
  bg?: 'standard' | 'inside' | 'outside'
  title?: string
}
export function Header({
  bg = 'standard',
  title = 'Nova Refeição',
}: HeaderProps) {
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 20
  const { navigate } = useNavigation()

  return (
    <View
      className={clsx('h-32 w-full flex-row  bg-gray-500  px-4 ', {
        'bg-green-100': bg === 'inside',
        'bg-red-100': bg === 'outside',
      })}
      style={{ paddingTop }}
    >
      <TouchableOpacity onPress={() => navigate('home')}>
        <ArrowLeft size={30} weight="bold" color={colors.gray[800]} />
      </TouchableOpacity>
      <View className="flex-1">
        <Text className="text-center font-heading text-2xl">{title}</Text>
      </View>
    </View>
  )
}
