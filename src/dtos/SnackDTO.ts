export type SnackDTO = {
  id: string
  food: string
  hour: string
  status: 'inside' | 'outside'
  created_at: string
  description: string
}
