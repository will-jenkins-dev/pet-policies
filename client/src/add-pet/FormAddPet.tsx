import { useState, useEffect } from 'react'

import { FORM_FIELDS, FORM_IDS } from './constants'

import { fetchOptions, addPolicy } from '../api/api'

import { Formik, Field, Form, FormikHelpers } from 'formik'
import { InsuranceStatus, PetType } from './../types/pet.type'

const intialSelectOption = { id: -1, label: 'Please select...' }

const initialValues = Object.fromEntries(
  Object.entries(FORM_FIELDS).map(([k, field]) => [k, field.initialValue]),
) as unknown

interface FormValues {
  name: string
  age: number
  insuranceStatus: InsuranceStatus
  petType: PetType
}
const PetFormField = (props: any) => {
  const { id, options, ...rest } = props
  const { label, placeholder, as } = FORM_FIELDS[id]
  const children = options
    ? {
        children: options.map(
          ({ id, label }: { id: string; label: string }) => (
            <option id={id} value={id} label={label}>
              {label}
            </option>
          ),
        ),
      }
    : undefined
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field
        as={as}
        id={id}
        name={id}
        placeholder={placeholder}
        {...rest}
        {...children}
      />
    </>
  )
}

const AddPetForm = () => {
  const [statuses, setStatuses] = useState<Array<InsuranceStatus>>([])
  const [petTypes, setPetTypes] = useState<Array<PetType>>([])

  useEffect(() => {
    fetchOptions().then(({ insuranceStatuses, petTypes }) => {
      setStatuses([{ ...intialSelectOption }, ...insuranceStatuses])
      setPetTypes([{ ...intialSelectOption }, ...petTypes])
    })
  }, [])
  const submitValues = async ({
    values,
    done,
  }: {
    values: any
    done: () => void
  }) => {
    debugger
    await addPolicy(values)
    done()
  }
  return (
    <div>
      <h2>Add a new Pet</h2>
      <Formik
        initialValues={initialValues as FormValues}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>,
        ) => {
          submitValues({ values, done: () => setSubmitting(false) })
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2))
          //     setSubmitting(false)
          //   }, 500)
          // }
        }}
      >
        <Form>
          <PetFormField id={FORM_IDS.NAME} />
          <PetFormField id={FORM_IDS.AGE} />
          <PetFormField id={FORM_IDS.PET_TYPE} options={petTypes} />
          <PetFormField id={FORM_IDS.INSURANCE_STATUS} options={statuses} />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export { AddPetForm }
