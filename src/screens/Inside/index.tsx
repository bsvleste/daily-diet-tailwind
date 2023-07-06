import { Text, View, Image } from 'react-native'
import PositivePNG from '@assets/Positive.png'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
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
        <Button
          className="mt-4"
          icon={Plus}
          title="Ir para a página inicial"
          onPress={() => navigate('home')}
        />
      </View>
    </View>
  )
}
