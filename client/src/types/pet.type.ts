
export type PetType = {id:number, label:string}
export type InsuranceStatus = {id:number, label:string}

export type Pet = {
	name: string
	age: number
	type: PetType
	status: InsuranceStatus
}
