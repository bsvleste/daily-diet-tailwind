import { getAllSnack } from './getAllSnack'

export async function getSnackPerCentege() {
  try {
    const snacks = await getAllSnack()

    const totalSnacksInside = snacks.filter(
      (percentageInside: any) => percentageInside.status === 'inside',
    ).length
    const totalSnacksOutside = snacks.filter(
      (percentageOutside: any) => percentageOutside.status === 'outside',
    ).length
    const percentage = (totalSnacksInside / snacks.length) * 100
    const totalSnacks = snacks.length
    return {
      percentage,
      totalSnacksInside,
      totalSnacksOutside,
      totalSnacks,
    }
  } catch (error) {}
}
