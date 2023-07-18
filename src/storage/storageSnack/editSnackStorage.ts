import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'
import { SnackDTO } from '@dtos/SnackDTO'
import { DAILY_DIET_SNACK } from '@storage/storageConfig'
import { getAllSnack } from './getAllSnack'

export async function editSnackStorage(snack: SnackDTO) {
  try {
    const snackStorage = await getAllSnack()
    const newSnack = snackStorage.filter((item: any) => item.id !== snack.id)

    await AsyncStorage.setItem(
      DAILY_DIET_SNACK,
      JSON.stringify([...newSnack, snack]),
    )
  } catch (error) {
    throw new AppError('Não foi possivel cadastrar')
  }
}
