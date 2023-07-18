import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native'
import { Header } from '@components/Header'
import { Circle } from 'phosphor-react-native'
import colors from 'tailwindcss/colors'
import clsx from 'clsx'
import { useNavigation } from '@react-navigation/native'
import { ButtonRoot } from '@components/Button/ButtonRoot'
import { ButtonTitle } from '@components/Button/ButtonTitle'
import { createSnackStorage } from '@storage/storageSnack/createSnackStorage'
import DateTimePicker from '@react-native-community/datetimepicker'
import uuid from 'react-native-uuid'
export function CreateSnack() {
  const { navigate } = useNavigation()
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [food, setFood] = useState('')
  const [description, setDescription] = useState('')
  const [transactionType, setTransactionType] = useState('inside')

  function handleSelectTransactionType(type: 'inside' | 'outside') {
    setTransactionType(type)
  }
  async function handleNavigation() {
    const data = {
      id: uuid.v4(),
      food,
      hour: date.toLocaleTimeString().slice(0, 5),
      status: transactionType,
      created_at: date.toLocaleDateString(),
      description,
    }
    // console.log('clicou')
    await createSnackStorage(data)
    if (transactionType === 'inside') {
      navigate('inside')
    } else {
      navigate('outside')
    }
  }

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date

    setDate(currentDate)
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
  return (
    <View className="flex-1 ">
      <Header />
      <View className="-mt-8 flex-1 justify-between rounded-3xl bg-white px-6">
        <View className="mt-8 h-full justify-between">
          <View className="mb-4">
            <Text className="font-heading text-base">Nome</Text>
            <TextInput
              className="h-14 rounded-lg border-2 border-gray-400 p-4 text-base"
              onChangeText={setFood}
              value={food}
            />

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
            <View className="flex-row justify-between">
              <View className="w-36">
                <Text className="font-heading text-base">Data</Text>
                <TouchableOpacity
                  onPressIn={showDatepicker}
                  className="h-14 items-center justify-center rounded-lg border-2 border-gray-400 p-4 text-base"
                >
                  <Text>{date.toLocaleDateString()}</Text>
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
                  <Text>{date.toLocaleTimeString().slice(0, 5)}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="mt-2 ">
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
            </View>
          </View>
          <View>
            <ButtonRoot onPress={handleNavigation} className="mb-20">
              <ButtonTitle title="Cadastrar Refeição" />
            </ButtonRoot>
          </View>
        </View>
      </View>
    </View>
  )
}
