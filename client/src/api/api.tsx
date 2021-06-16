const API_ROOT = 'http://localhost:3001/api'

const fetchPets = async () => {
  const url = `${API_ROOT}/policies`
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }

  const data = await fetch(url, options).then(response => response.json())

  return data
}

const fetchOptions = async () => {
  const url = `${API_ROOT}/options`
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }

  const data = await fetch(url, options).then(response => response.json())
  return data
}

const addPolicy = async (payload: any) => {
  const url = `${API_ROOT}/add`
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(payload),
  }

  const data = await fetch(url, options).then(response => response.json())

  return data
}
export { fetchPets, fetchOptions, addPolicy }
