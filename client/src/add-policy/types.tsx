import { InsuranceStatus, PetType } from '../types/policy.type'
export type FormFieldInput = {
  as: string
  label: string
  placeholder?: string
  initialValue: number | string
  type?: string
  validate?: (value: string) => string | null
}

export type FormFieldSelect = {
  as: string
  label: string
  options: Array<InsuranceStatus | PetType>
  initialValue: string | number
  validate?: (value: number) => string | null
}
