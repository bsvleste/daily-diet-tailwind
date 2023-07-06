import { Button } from '@components/Button'
import { Text, View, Image } from 'react-native'
import NegativePNG from '@assets/INegative.png'
import { Plus } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
export function Outside() {
  const { navigate } = useNavigation()
  return (
    <View className="flex-1 items-center justify-center bg-white px-3">
      <View className="items-center justify-center">
        <Text className="font-heading text-3xl text-red-500">Que pena!</Text>
        <Text className="text-center font-body text-base">
          Você <Text className="font-heading">saiu da dieta </Text> dessa vez,
          mas continue se esforçando e não desista!
        </Text>
      </View>
      <View className="mt-4 justify-between">
        <Image source={NegativePNG} alt="pessoal triste" />
        <Button
          onPress={() => navigate('home')}
          className="mt-4"
          icon={Plus}
          title="Ir para a página inicial"
        />
      </View>
    </View>
  )
}
