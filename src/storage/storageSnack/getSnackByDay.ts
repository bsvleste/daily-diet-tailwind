import { AppError } from '@utils/AppError'
import { getAllSnack } from './getAllSnack'

export async function getSnackByDay(id: string) {
  try {
    const storage = await getAllSnack()
    const snack = storage.filter((snackDay: any) => snackDay.id === id)
    return snack
  } catch (error) {
    throw new AppError('Não foi possivel Pegar os dados')
  }
}
