import { useCallback, useState } from 'react'
import {
  Alert,
  Image,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Logo from '@assets/Logo.png'
import UserImg from '@assets/User.png'
import { ArrowUpRight, Circle, Hamburger, Plus } from 'phosphor-react-native'

import { Container } from '@components/Container'
import color from 'tailwindcss/colors'
import { ButtonRoot } from '@components/Button/ButtonRoot'
import { ButtonIcon } from '@components/Button/ButtonIcon'
import { ButtonTitle } from '@components/Button/ButtonTitle'
import { AppError } from '@utils/AppError'
import { Loading } from '@components/Loading'
import { createHistoryStorage } from '@storage/storageSnack/createHistoryStorage'
import { HistorySnackByDayDTO } from '@dtos/HistorySnackBayDayDTO'
import { getSnackPerCentege } from '@storage/storageSnack/getSnackPerCentege'
import clsx from 'clsx'
export function Home() {
  const { navigate } = useNavigation()
  const [snacks, setSnacks] = useState<HistorySnackByDayDTO[]>([])
  const [percentageOffSnacks, setPercentageOffSnacks] = useState<number>(0)
  const [isLoading, setIsloading] = useState(true)
  function handleGoToStatistics() {
    navigate('statistics')
  }
  function handleGotoSnack() {
    navigate('create_snack')
  }
  function handlegoToSnackInfo(snackId: string) {
    navigate('info_snack', { snackId })
  }
  async function handleFecthSnack() {
    try {
      setIsloading(true)
      const percentege = await getSnackPerCentege()
      setPercentageOffSnacks(percentege!)
      const data = await createHistoryStorage()
      setSnacks(data)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Snack', 'Não foi possivel carrregar os dados')
      } else {
        console.log(error)
        Alert.alert(
          'Novo player',
          'Não foi possivel cadastar o player, tente novamente',
        )
      }
    } finally {
      setIsloading(false)
    }
  }
  useFocusEffect(
    useCallback(() => {
      handleFecthSnack()
    }, []),
  )
  return (
    <Container>
      <View className="flex-row items-center justify-between">
        <Image source={Logo} alt="logo dailayt" />
        <TouchableOpacity>
          <Image source={UserImg} alt="avatar do usuario" />
        </TouchableOpacity>
      </View>
      <View
        className={clsx('mt-6 h-28 w-full  rounded-lg', {
          'bg-green-100': percentageOffSnacks >= 50,
          'bg-red-100': percentageOffSnacks < 50,
        })}
      >
        <View className="items-end">
          <TouchableOpacity
            className="mr-2 mt-2"
            onPress={handleGoToStatistics}
          >
            <ArrowUpRight
              size={24}
              weight="bold"
              color={
                percentageOffSnacks >= 50 ? color.green[300] : color.red[300]
              }
            />
          </TouchableOpacity>
        </View>
        <View className=" flex-col items-center justify-center">
          <Text className="font-heading text-2xl font-extrabold">
            {percentageOffSnacks?.toFixed()}%
          </Text>
          <Text className="font-body">das refeiçoes dentro da dieta</Text>
        </View>
      </View>
      <View className="mt-8">
        <Text>Refeições</Text>
        <ButtonRoot onPress={handleGotoSnack}>
          <ButtonIcon icon={Plus} />
          <ButtonTitle title="Nova Refeição" />
        </ButtonRoot>
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={snacks}
          keyExtractor={(item) => item.hour}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handlegoToSnackInfo(item.id)}
              className="mb-4 h-12 w-full flex-row justify-between rounded-md border border-gray-500 px-5"
            >
              <View className="w-full flex-row items-center gap-2">
                <Text className="font-heading text-sm">{item.hour}</Text>
                <Text className=" text-gray-600">|</Text>
                <Text className="truncate font-body text-2xl text-gray-600">
                  {item.food}
                </Text>
              </View>
              <View className="items-center justify-center">
                <Circle
                  size={22}
                  weight="fill"
                  color={
                    item.status === 'inside' ? color.green[300] : color.red[300]
                  }
                />
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text className="font-heading text-xl">{section.title}</Text>
          )}
          contentContainerStyle={
            [].length === 0 && {
              justifyContent: 'center',
              marginTop: 24,
              paddingBottom: 64,
            }
          }
          ListEmptyComponent={() => (
            <View className="mt-4 items-center justify-center">
              <Hamburger size={32} color="#000" />
              <Text className="text-center font-heading text-xl text-gray-600">
                Sua lista de dieta esta vazia, adicione suas refeições.
              </Text>
            </View>
          )}
        />
      )}
    </Container>
  )
}
