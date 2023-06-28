import { Image, SectionList, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Logo from '@assets/Logo.png'
import UserImg from '@assets/User.png'
import { ArrowUpRight, Circle, Plus } from 'phosphor-react-native'
import { useState } from 'react'
import { HistoryFoodByDay } from '@dtos/HistoryFoodBayDay'
import { Button } from '@components/Button'
import colors from 'tailwindcss/colors'
export function Home() {
  const [info, setInfo] = useState<HistoryFoodByDay[]>([
    {
      title: '16/05/2023',
      data: [
        { food: 'x-tudo', hour: '12:00', status: false },
        { food: 'cafe da manha', hour: '8:00', status: true },
      ],
    },
    {
      title: '17/05/2023',
      data: [{ food: 'x-tudo', hour: '12:00', status: false }],
    },
    {
      title: '18/05/2023',
      data: [{ food: 'x-tudo', hour: '12:00', status: false }],
    },
  ])
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 20
  return (
    <View className="flex-1 bg-gray-100 px-4 " style={{ paddingTop }}>
      <View className="flex-row items-center justify-between">
        <Image source={Logo} alt="logo dailayt" />
        <TouchableOpacity>
          <Image source={UserImg} alt="avatar do usuario" />
        </TouchableOpacity>
      </View>
      <View className="mt-6 h-28 w-full  rounded-lg bg-green-100">
        <View className="items-end">
          <TouchableOpacity
            className="mr-2 mt-2"
            onPress={() => console.log('pressiounou')}
          >
            <ArrowUpRight size={24} weight="bold" color="#000" />
          </TouchableOpacity>
        </View>
        <View className=" flex-col items-center justify-center">
          <Text className="font-heading text-2xl font-extrabold">96,09%</Text>
          <Text className="font-body">das refeiçoes dentro da dieta</Text>
        </View>
      </View>
      <View className="mt-8">
        <Text>Refeições</Text>
        <Button
          icon={Plus}
          title="NovaRefeição"
          onPress={() => console.log('clicou')}
        />
      </View>

      <SectionList
        sections={info}
        keyExtractor={(item) => item.hour}
        renderItem={({ item }) => (
          <TouchableOpacity className="mb-4 h-12 w-full flex-row justify-between rounded-md border border-gray-500 px-5">
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
                color={item.status ? colors.green[300] : colors.red[300]}
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
          <View>
            <Text>Lista vazia</Text>
          </View>
        )}
      />
    </View>
  )
}
