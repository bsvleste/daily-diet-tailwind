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

      <View className="w-ful mt-16 items-center justify-center px-4">
        <Text className="font-heading">Estatisticas Gerais</Text>
        <View className="mt-4 h-24 w-full flex-col items-center justify-center rounded-md bg-gray-400">
          <Text className="font-heading text-xl">22</Text>
          <Text className="font-body">
            melhor sequencia de pratos dentro da dieta
          </Text>
        </View>
        <View className="mt-4 h-24 w-full flex-col items-center justify-center rounded-md bg-gray-400">
          <Text className="font-heading text-xl">99</Text>
          <Text className="font-body">refeições registradas</Text>
        </View>

        <View className="mt-8 flex w-full flex-row items-center justify-center gap-[10px]">
          <View className="h-28 flex-grow flex-col items-center justify-center bg-green-300 ">
            <Text className="font-heading text-xl">99</Text>
            <Text className="text-center font-body text-base">
              refeições dentro da dieta
            </Text>
          </View>
          <View className="h-28 flex-grow flex-col items-center justify-center bg-red-300 ">
            <Text className="font-heading text-xl">99</Text>
            <Text className="text-center  font-body text-base">
              refeições fora da dieta
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
