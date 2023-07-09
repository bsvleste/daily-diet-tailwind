import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateSnack } from '@screens/CreateSnack'
import { EditSnack } from '@screens/EditSnack'
import { Home } from '@screens/Home'
import { InfoSnack } from '@screens/InfoSnack'
import { Inside } from '@screens/Inside'
import { Outside } from '@screens/Outside'
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
      <Screen name="create_snack" component={CreateSnack} />
      <Screen name="inside" component={Inside} />
      <Screen name="outside" component={Outside} />
      <Screen name="info_snack" component={InfoSnack} />
      <Screen name="edit_snack" component={EditSnack} />
    </Navigator>
  )
}
