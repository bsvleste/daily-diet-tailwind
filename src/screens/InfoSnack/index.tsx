/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ButtonIcon } from '@components/Button/ButtonIcon'
import { ButtonRoot } from '@components/Button/ButtonRoot'
import { ButtonTitle } from '@components/Button/ButtonTitle'
import { DeletModal } from '@components/DeletModal'
import { Header } from '@components/Header'
import { Circle, Pencil, Trash } from 'phosphor-react-native'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { getSnackByDay } from '@storage/storageSnack/getSnackByDay'
import { SnackDTO } from '@dtos/SnackDTO'
import { Loading } from '@components/Loading'
interface RouteParamsInfoSnack {
  snackId: string
}
export function InfoSnack() {
  const route = useRoute()
  const { navigate } = useNavigation()
  const { snackId } = route.params as RouteParamsInfoSnack
  const [snack, setSnack] = useState<SnackDTO>({} as SnackDTO)
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  function togleModal() {
    setIsModalOpen(!isModalOpen)
  }
  async function handleFecthSnackById() {
    try {
      setIsLoading(true)
      const response = await getSnackByDay(snackId)

      setSnack(response[0])
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    handleFecthSnackById()
  }, [snackId])
  return (
    <View className="flex-1  bg-white">
      <DeletModal setModalIsVisible={togleModal} isOpen={isModalOpen} />
      <Header
        bg={snackId === 'inside' ? 'inside' : 'outside'}
        title="Refeição"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <View className="mb-18 -mt-8 mb-4 h-full flex-1 justify-between rounded-3xl bg-white px-6">
          <View className="mt-8">
            <Text className="font-heading text-xl">{snack.food}</Text>
            <Text className="mt-4 font-body text-base">
              Sanduíche de pão integral com atum e salada de alface e tomate
            </Text>
            <Text className="mt-8 font-heading text-xl">Data e hora</Text>
            <Text className="mt-4 font-body text-base">
              {snack.created_at} ás {snack.hour}
            </Text>
            <View className="mt-4 h-9 w-36 flex-row items-center justify-center rounded-full bg-gray-400">
              <View className="flex-row items-center justify-center gap-2">
                <Circle
                  size={16}
                  weight="fill"
                  color={
                    snack.status === 'inside'
                      ? colors.green[300]
                      : colors.red[300]
                  }
                />
                {snack.status === 'inside' ? (
                  <Text>dentro da dieta</Text>
                ) : (
                  <Text>fora da dieta</Text>
                )}
              </View>
            </View>
          </View>
          <View>
            <ButtonRoot className="mb-4" onPress={() => navigate('edit_snack')}>
              <ButtonIcon icon={Pencil} />
              <ButtonTitle title="Editar Refeição" />
            </ButtonRoot>
            <ButtonRoot background="secundary" onPress={togleModal}>
              <ButtonIcon icon={Trash} background="secundary" />
              <ButtonTitle title="Excluir Refeição" background="secundary" />
            </ButtonRoot>
          </View>
        </View>
      )}
    </View>
  )
}
