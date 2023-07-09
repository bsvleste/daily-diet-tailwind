import { Text, View, Image } from 'react-native'
import NegativePNG from '@assets/INegative.png'
import { useNavigation } from '@react-navigation/native'
import { ButtonRoot } from '@components/Button/ButtonRoot'
import { ButtonTitle } from '@components/Button/ButtonTitle'
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
        <ButtonRoot onPress={() => navigate('home')} className="mt-4">
          <ButtonTitle title="Ir para a página inicial" />
        </ButtonRoot>
      </View>
    </View>
  )
}
