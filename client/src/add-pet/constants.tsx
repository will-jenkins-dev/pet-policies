import type { FormFieldInput, FormFieldSelect } from './types'

const FORM_IDS = {
  NAME: 'name',
  AGE: 'age',
  PET_TYPE: 'petType',
  INSURANCE_STATUS: 'insuranceStatus',
}
const FORM_FIELDS: Record<string, FormFieldInput | FormFieldSelect> = {
  [FORM_IDS.NAME]: {
    as: 'input',
    label: `Your Pet's name`,
    placeholder: 'enter name here',
    initialValue: '',
  },
  [FORM_IDS.AGE]: {
    as: 'input',
    label: `Your Pet's age`,
    placeholder: 'enter age here',
    initialValue: '',
  },
  [FORM_IDS.PET_TYPE]: {
    as: 'select',
    label: `What type of Pet do you have`,
    initialValue: -1,
  },
  [FORM_IDS.INSURANCE_STATUS]: {
    as: 'select',
    label: `What type cover do you have`,
    initialValue: -1,
  },
}
export { FORM_IDS, FORM_FIELDS }
