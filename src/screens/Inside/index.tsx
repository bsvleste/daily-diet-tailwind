import { Text, View, Image } from 'react-native'
import PositivePNG from '@assets/Positive.png'
import { useNavigation } from '@react-navigation/native'
import { ButtonRoot } from '@components/Button/ButtonRoot'
import { ButtonTitle } from '@components/Button/ButtonTitle'
export function Inside() {
  const { navigate } = useNavigation()
  return (
    <View className="flex-1 items-center justify-center bg-white px-3">
      <View className="items-center justify-center">
        <Text className="font-heading text-3xl text-green-500">
          Continue assim!
        </Text>
        <Text className="text-center font-body text-lg ">
          Você continua <Text className="font-heading">dentro da dieta</Text>.
          Muito bem!
        </Text>
      </View>
      <View className="mt-4 justify-between">
        <Image source={PositivePNG} alt="Imagem de sucesso" />
        <ButtonRoot className="mt-4" onPress={() => navigate('home')}>
          <ButtonTitle title="Ir para a página inicial" />
        </ButtonRoot>
      </View>
    </View>
  )
}
