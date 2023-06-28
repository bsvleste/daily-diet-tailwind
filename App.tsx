/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { Loading } from './src/components/Loading'
import { Routes } from '@routes/index'
export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <>
      <StatusBar style={'auto'} translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </>
  )
}
