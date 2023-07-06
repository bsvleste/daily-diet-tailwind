import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { Inside } from '@screens/Inside'
import { Outside } from '@screens/Outside'
import { Snack } from '@screens/Snack'
import { Statistics } from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()
export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="snack" component={Snack} />
      <Screen name="inside" component={Inside} />
      <Screen name="outside" component={Outside} />
    </Navigator>
  )
}
