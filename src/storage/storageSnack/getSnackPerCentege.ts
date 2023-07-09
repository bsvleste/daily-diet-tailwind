import { getAllSnack } from './getAllSnack'

export async function getSnackPerCentege() {
  try {
    const snacks = await getAllSnack()
    const percentegeOffInside = snacks.filter(
      (percentageInside: any) => percentageInside.status === 'inside',
    ).length

    return (percentegeOffInside / snacks.length) * 100
  } catch (error) {}
}
