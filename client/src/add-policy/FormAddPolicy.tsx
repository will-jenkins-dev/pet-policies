import { useState, useEffect } from 'react'

import { FORM_FIELDS, FORM_IDS, FormId, initialValues } from './constants'

import * as api from '../api/api'

import { Formik, Field, Form, FieldProps, FormikProps } from 'formik'
import { InsuranceStatus, PetType } from '../types/policy.type'
import { FormValues } from './FormValues'

const intialSelectOption = { id: -1, label: 'Please select...' }

type PetFormFieldProps = {
  id: FormId
  options?: (PetType | InsuranceStatus)[]
}

const PetFormField: React.FC<PetFormFieldProps & FormikProps<FormValues>> =
  props => {
    const { id, options, errors, touched, ...restProps } = props
    const { label, ...restFieldProps } = FORM_FIELDS[id]
    const children = options
      ? {
          children: options.map(({ id, label }: PetType | InsuranceStatus) => (
            <option key={id} value={id} label={label}>
              {label}
            </option>
          )),
        }
      : undefined
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <Field
          id={id}
          name={id}
          {...restFieldProps}
          {...restProps}
          {...children}
        />
        {errors[id] && touched[id] ? <span>{errors[id]}</span> : null}
      </>
    )
  }
type AddPolicyFormProps = {
  onAdd: () => void
}

const AddPolicyForm: React.FC<AddPolicyFormProps> = props => {
  const [statuses, setStatuses] = useState<Array<InsuranceStatus>>([])
  const [petTypes, setPetTypes] = useState<Array<PetType>>([])
  const { onAdd } = props
  useEffect(() => {
    api.getOptions().then(({ insuranceStatuses, petTypes }) => {
      setStatuses([{ ...intialSelectOption }, ...insuranceStatuses])
      setPetTypes([{ ...intialSelectOption }, ...petTypes])
    })
  }, [])
  const submitValues = async ({ values }: { values: FormValues }) =>
    // const policy = formatPolicyFormValues(values)
    await api.addPolicy(values)

  return (
    <div>
      <h2>Add a new Pet</h2>
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          await submitValues({ values })
          setSubmitting(false)
          onAdd && onAdd()
        }}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form>
            <PetFormField id={'name'} {...formikProps} />
            <PetFormField id={'age'} {...formikProps} />
            <PetFormField
              id={'petTypeId'}
              options={petTypes}
              {...formikProps}
            />
            <PetFormField
              id={'insuranceStatusId'}
              options={statuses}
              {...formikProps}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { AddPolicyForm }
