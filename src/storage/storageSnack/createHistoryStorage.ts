import { getAllSnack } from '@storage/storageSnack/getAllSnack'
export async function createHistoryStorage() {
  const days: any = []

  try {
    const storage = await getAllSnack()
    storage.forEach((element: any) => {
      const day = element.created_at
      if (!days.includes(day)) {
        days.push(day)
      }
    })
    const snacksByday = days.map((day: any) => {
      const snacks = storage
        .filter((days: any) => days.created_at === day)
        .map((snack: any) => {
          return {
            ...snack,
          }
        })
      return { title: day, data: snacks }
    })
    return snacksByday
  } catch (error) {
    console.log(error)
  }
}
