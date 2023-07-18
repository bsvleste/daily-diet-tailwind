/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { Platform, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Header } from '@components/Header'
import { Circle } from 'phosphor-react-native'
import colors from 'tailwindcss/colors'
import clsx from 'clsx'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ButtonRoot } from '@components/Button/ButtonRoot'
import { ButtonTitle } from '@components/Button/ButtonTitle'
import DateTimePicker from '@react-native-community/datetimepicker'
import { SnackDTO } from '@dtos/SnackDTO'
import { getSnackById } from '@storage/storageSnack/getSnackById'
import { Loading } from '@components/Loading'
import { editSnackStorage } from '@storage/storageSnack/editSnackStorage'
interface RouteParamsInfoSnack {
  snackId: string
}
export function EditSnack() {
  const route = useRoute()
  const { navigate } = useNavigation()
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const { snackId } = route.params as RouteParamsInfoSnack
  const [isLoading, setIsLoading] = useState(true)
  const [transactionType, setTransactionType] = useState('')
  const [food, setFood] = useState('')
  const [created_at, setCreatedAt] = useState('')
  const [hour, setHour] = useState('')
  const [description, setDescription] = useState('')

  function handleSelectTransactionType(type: 'inside' | 'outside') {
    setTransactionType(type)
  }
  async function handleNavigation() {
    /* console.log(food)
    console.log(description)
    console.log(hour)
    console.log(created_at)
    console.log(transactionType) */
    const data = {
      id: snackId,
      food,
      hour,
      status: transactionType,
      created_at,
      description,
    }
    await editSnackStorage(data)
    if (transactionType === 'inside') {
      navigate('inside')
    } else {
      navigate('outside')
    }
  }
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date
    setDate(currentDate)
    setCreatedAt(date.toLocaleDateString())
    setHour(date.toLocaleTimeString())
    setShow(Platform.OS === 'ios')
  }

  const showMode = (currentMode: any) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }
  async function handleFecthSnackById() {
    try {
      setIsLoading(true)
      const response = await getSnackById(snackId)
      // setSnack(response[0])
      setFood(response[0].food)
      setDescription(response[0].description)
      setTransactionType(response[0].status)
      setHour(response[0].hour)
      setCreatedAt(response[0].created_at)
      setTransactionType(response[0].status)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    handleFecthSnackById()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snackId])
  return (
    <View className="flex-1">
      <Header title="Editar Refeição" />
      {isLoading ? (
        <Loading />
      ) : (
        <View className="mb-18 -mt-8 flex-1 rounded-3xl bg-white px-6">
          <View className="mb-24 mt-8">
            <View className="mb-4">
              <Text className="font-heading text-base">Nome</Text>
              <TextInput
                className="h-14 rounded-lg border-2 border-gray-400 p-4 text-base"
                onChangeText={setFood}
                value={food}
              />
            </View>
            <View className="mb-4">
              <Text className="font-heading text-base">Descrição</Text>
              <TextInput
                className="h-24 rounded-lg border-2 border-gray-400 p-4  align-top text-base"
                multiline
                textAlignVertical="top"
                onChangeText={setDescription}
                value={description}
              />
            </View>
            <View className="flex-grow flex-row justify-between">
              <View className="w-36">
                <Text className="font-heading text-base">Data</Text>
                <TouchableOpacity
                  onPressIn={showDatepicker}
                  className="h-14 items-center justify-center rounded-lg border-2 border-gray-400 p-4 text-base"
                >
                  <Text>{created_at}</Text>
                </TouchableOpacity>
              </View>
              <View className="w-36">
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                  />
                )}
                <Text className="font-heading text-base">Hora</Text>
                <TouchableOpacity
                  onPressIn={showTimepicker}
                  className="h-14 items-center justify-center rounded-lg border-2 border-gray-400 p-4 text-base"
                >
                  <Text>{hour}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text className="mt-4 font-heading text-base">
              Está dentro da dieta?
            </Text>
            <View className="mb-8  flex-grow flex-row justify-between">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleSelectTransactionType('inside')}
                className={clsx(
                  'h-14 w-36 flex-row items-center justify-center rounded-lg bg-gray-400',
                  {
                    'border-2 border-green-500 bg-green-100':
                      transactionType === 'inside',
                  },
                )}
              >
                <Circle size={12} weight="fill" color={colors.green[500]} />
                <Text className="ml-2 font-heading text-base">Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleSelectTransactionType('outside')}
                className={clsx(
                  'h-14 w-36 flex-row items-center justify-center rounded-lg bg-gray-400',
                  {
                    'border-2 border-red-500 bg-red-100':
                      transactionType === 'outside',
                  },
                )}
              >
                <Circle size={12} weight="fill" color={colors.red[500]} />
                <Text className="ml-2 font-heading text-base">Não</Text>
              </TouchableOpacity>
            </View>
            <ButtonRoot onPress={handleNavigation}>
              <ButtonTitle title="Salvar Alterações" />
            </ButtonRoot>
          </View>
        </View>
      )}
    </View>
  )
}
