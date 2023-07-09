import AsyncStorage from '@react-native-async-storage/async-storage'
import { DAILY_DIET_SNACK } from '@storage/storageConfig'
import { AppError } from '@utils/AppError'

export async function getAllSnack() {
  try {
    const snacksStorage = await AsyncStorage.getItem(DAILY_DIET_SNACK)
    const snacks = snacksStorage ? JSON.parse(snacksStorage) : []
    return snacks
  } catch (error) {
    throw new AppError('Não foi possivel pegar os snacks')
  }
}
