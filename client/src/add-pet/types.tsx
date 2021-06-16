import { InsuranceStatus, PetType } from './../types/pet.type'
export type FormFieldInput = {
  as: string
  label: string
  placeholder?: string
  initialValue: string | number | PetType | InsuranceStatus
}

export type FormFieldSelect = {
  as: string
  label: string
  placeholder: never
  options: Array<InsuranceStatus | PetType>
  initialValue: InsuranceStatus | PetType
}
