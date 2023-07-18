import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { AppError } from '@utils/AppError'
import clsx from 'clsx'
import { ArrowLeft } from 'phosphor-react-native'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import colors from 'tailwindcss/colors'
import { getSnackPerCentege } from '@storage/storageSnack/getSnackPerCentege'
import { Loading } from '@components/Loading'
export function Statistics() {
  const { goBack } = useNavigation()
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 20
  const [isLoading, setIsLoading] = useState(true)
  const [percentage, setPercentage] = useState<number | null>()
  const [totalSncaks, setTotalSnacks] = useState<number | null>()
  const [totalInside, setTotalInside] = useState<number | null>()
  const [totalOtside, setTotalOutside] = useState<number | null>()
  function handleGoBack() {
    goBack()
  }

  async function handleStatistics() {
    try {
      setIsLoading(true)
      const response = await getSnackPerCentege()
      setPercentage(response?.percentage)
      setTotalSnacks(response?.totalSnacks)
      setTotalInside(response?.totalSnacksInside)
      setTotalOutside(response?.totalSnacksOutside)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Statisitics', 'Não foi possivel pegas as estatisitcas')
      } else {
        console.log(error)
      }
    } finally {
      setIsLoading(false)
    }
  }
  useFocusEffect(
    useCallback(() => {
      handleStatistics()
    }, []),
  )
  return (
    <View className="flex-1">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View
            className={clsx('h-40 w-full px-4 ', {
              'bg-green-100': percentage! >= 50,
              'bg-red-100': percentage! < 50,
            })}
            style={{ paddingTop }}
          >
            <TouchableOpacity onPress={handleGoBack}>
              <ArrowLeft
                size={24}
                color={percentage! >= 50 ? colors.green[300] : colors.red[300]}
                weight="bold"
              />
            </TouchableOpacity>
            <View className="items-center justify-center">
              <Text className="font-heading text-2xl">
                {percentage?.toFixed()}%
              </Text>
              <Text className="font-body ">das refeições dentro da dieta</Text>
            </View>
          </View>

          <View className="w-ful -mt-6 flex-1 rounded-3xl bg-white px-4">
            <View className="w-ful mt-16 items-center justify-center">
              <Text className="font-heading">Estatisticas Gerais</Text>
              <View className="mt-4 h-24 w-full flex-col items-center justify-center rounded-md bg-gray-400">
                <Text className="font-heading text-xl">22</Text>
                <Text className="font-body">
                  melhor sequencia de pratos dentro da dieta
                </Text>
              </View>
              <View className="mt-4 h-24 w-full flex-col items-center justify-center rounded-md bg-gray-400">
                <Text className="font-heading text-xl">{totalSncaks}</Text>
                <Text className="font-body">refeições registradas</Text>
              </View>

              <View className="mt-8 w-full flex-row items-center justify-center gap-x-2">
                <View className="h-28 flex-1 flex-col items-center justify-center bg-green-300 ">
                  <Text className="font-heading text-xl">{totalInside}</Text>
                  <Text className="text-center font-body text-base">
                    refeições dentro da dieta
                  </Text>
                </View>
                <View className="h-28 flex-1 flex-col items-center justify-center bg-red-300 ">
                  <Text className="font-heading text-xl">{totalOtside}</Text>
                  <Text className="text-center  font-body text-base">
                    refeições fora da dieta
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  )
}
