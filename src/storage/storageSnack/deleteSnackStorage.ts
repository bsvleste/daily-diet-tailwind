import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'
import { DAILY_DIET_SNACK } from '@storage/storageConfig'
import { getAllSnack } from './getAllSnack'

export async function deletSnackStorage(snackId: string) {
  try {
    const snackStorage = await getAllSnack()
    const newSnack = snackStorage.filter((item: any) => item.id !== snackId)

    await AsyncStorage.setItem(DAILY_DIET_SNACK, JSON.stringify([...newSnack]))
  } catch (error) {
    throw new AppError('Não foi possivel Deletar')
  }
}
