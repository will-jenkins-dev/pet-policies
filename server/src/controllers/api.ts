import { Response, Request } from 'express'
import { PolicyNew } from '../types/policy.type'
import * as repo from './../data/repository'

export const policies = (req: Request, res: Response) => {
  const currentPolicies = repo.getPolicies()
  return res.json({ policies: currentPolicies })
}

export const options = (req: Request, res: Response) => {
  const options = repo.getOptions()
  return res.json(options)
}

export const add = (req: Request, res: Response) => {
  const policyNew = req.body as PolicyNew
  repo.addPolicy(policyNew)
  return res.send(200)
}
