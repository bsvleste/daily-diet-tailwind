import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'
import { SnackDTO } from '@dtos/SnackDTO'
import { DAILY_DIET_SNACK } from '@storage/storageConfig'
import { getAllSnack } from './getAllSnack'

export async function createSnackStorage(snack: SnackDTO) {
  try {
    const snackStorage = await getAllSnack()
    await AsyncStorage.setItem(
      DAILY_DIET_SNACK,
      JSON.stringify([...snackStorage, snack]),
    )
  } catch (error) {
    throw new AppError('Não foi possivel cadastrar')
  }
}
