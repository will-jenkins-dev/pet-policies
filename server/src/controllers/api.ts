'use strict'
import {
  Pet,
  PetType,
  InsuranceStatus,
  insuranceStatuses,
  petTypes,
} from './../types/pet.type'
import { Response, Request, NextFunction, response } from 'express'

const data: Array<Pet> = [
  { name: 'poochy', age: 4, type: petTypes[0], status: insuranceStatuses[0] },
]

export const policies = (req: Request, res: Response) => {
  return res.json({ pets: data })
}

export const options = (req: Request, res: Response) => {
  return res.json({ petTypes, insuranceStatuses })
}

export const add = (req: Request, res: Response) => {
  return res.json({ petTypes, insuranceStatuses })
}
