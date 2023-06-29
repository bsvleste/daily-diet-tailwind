import clsx from 'clsx'
import { ArrowLeft } from 'phosphor-react-native'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import colors from 'tailwindcss/colors'
export function Statistics() {
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 20
  return (
    <View className="flex-1">
      <View
        className={clsx('h-40 w-full bg-green-100 px-4 ')}
        style={{ paddingTop }}
      >
        <ArrowLeft size={24} color={colors.green[500]} weight="bold" />
        <View className="items-center justify-center">
          <Text className="font-heading text-2xl">99,90%</Text>
          <Text className="font-body ">das refeições dentro da dieta</Text>
        </View>
      </View>
    </View>
  )
}
