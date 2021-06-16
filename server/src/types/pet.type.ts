export type PetType = { id: number; label: string }
export type InsuranceStatus = { id: number; label: string }

export const petTypes: Array<PetType> = [
  { id: 1, label: 'Cat' },
  { id: 2, label: 'Dog' },
  { id: 3, label: 'Lizard' },
  { id: 4, label: 'Other' },
]

export const insuranceStatuses: Array<InsuranceStatus> = [
  { id: 1, label: 'Fully Covered' },
  { id: 2, label: 'Accident Only' },
  { id: 3, label: 'No Cover' },
]

export type Pet = {
  name: string
  age: number
  type: PetType
  status: InsuranceStatus
}
