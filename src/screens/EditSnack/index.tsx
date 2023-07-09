import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Header } from '@components/Header'
import { Circle } from 'phosphor-react-native'
import colors from 'tailwindcss/colors'
import clsx from 'clsx'
import { useNavigation } from '@react-navigation/native'
import { ButtonRoot } from '@components/Button/ButtonRoot'
import { ButtonTitle } from '@components/Button/ButtonTitle'
export function EditSnack() {
  const { navigate } = useNavigation()
  const [transactionType, setTransactionType] = useState('positive')
  function handleSelectTransactionType(type: 'positive' | 'negative') {
    setTransactionType(type)
  }
  function handleNavigation() {
    if (transactionType === 'positive') {
      navigate('inside')
    } else {
      navigate('outside')
    }
  }
  return (
    <View className="flex-1">
      <Header title="Editar Refeição" />
      <View className="mb-18 -mt-8 flex-1 rounded-3xl bg-white px-6">
        <View className="mb-24 mt-8">
          <View className="mb-4">
            <Text className="font-heading text-base">Nome</Text>
            <TextInput className="h-14 rounded-lg border-2 border-gray-400 p-4 text-base" />
          </View>
          <View className="mb-4">
            <Text className="font-heading text-base">Descrição</Text>
            <TextInput
              className="h-24 rounded-lg border-2 border-gray-400 p-4  align-top text-base"
              multiline
              textAlignVertical="top"
            />
          </View>
          <View className="flex-grow flex-row justify-between">
            <View className="w-36">
              <Text className="font-heading text-base">Data</Text>
              <TextInput className="h-14 rounded-lg border-2 border-gray-400 p-4 text-base" />
            </View>
            <View className="w-36">
              <Text className="font-heading text-base">Hora</Text>
              <TextInput className="h-14 rounded-lg border-2 border-gray-400 p-4 text-base" />
            </View>
          </View>
          <Text className="mt-4 font-heading text-base">
            Está dentro da dieta?
          </Text>
          <View className="mb-8  flex-grow flex-row justify-between">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleSelectTransactionType('positive')}
              className={clsx(
                'h-14 w-36 flex-row items-center justify-center rounded-lg bg-gray-400',
                {
                  'border-2 border-green-500 bg-green-100':
                    transactionType === 'positive',
                },
              )}
            >
              <Circle size={12} weight="fill" color={colors.green[500]} />
              <Text className="ml-2 font-heading text-base">Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleSelectTransactionType('negative')}
              className={clsx(
                'h-14 w-36 flex-row items-center justify-center rounded-lg bg-gray-400',
                {
                  'border-2 border-red-500 bg-red-100':
                    transactionType === 'negative',
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
    </View>
  )
}
