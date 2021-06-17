import { Response, Request } from 'express'
import { PolicyNew } from '../types/policy.type'
import * as repo from './../data/repository'

export const policies = (req: Request, res: Response): void => {
  const currentPolicies = repo.getPolicies()
  res.json({ policies: currentPolicies })
}

export const options = (req: Request, res: Response): void => {
  const options = repo.getOptions()
  res.json(options)
}

export const add = (
  req: Request<unknown, unknown, PolicyNew>,
  res: Response,
): void => {
  const policyNew = req.body
  repo.addPolicy(policyNew)
  res.send(200)
}
