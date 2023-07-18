import { getAllSnack } from './getAllSnack'

export async function getSnackPerCentege() {
  try {
    const snacks = await getAllSnack()
    let percentage
    const totalSnacksInside = snacks.filter(
      (percentageInside: any) => percentageInside.status === 'inside',
    ).length
    const totalSnacksOutside = snacks.filter(
      (percentageOutside: any) => percentageOutside.status === 'outside',
    ).length
    if (totalSnacksInside !== 0) {
      percentage = (totalSnacksInside / snacks.length) * 100
    } else {
      percentage = 0
    }
    console.log(`Esta eh a ${totalSnacksInside}`)
    const totalSnacks = snacks.length
    return {
      percentage,
      totalSnacksInside,
      totalSnacksOutside,
      totalSnacks,
    }
  } catch (error) {}
}
