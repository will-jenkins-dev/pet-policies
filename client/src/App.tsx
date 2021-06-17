import React, { useState, useEffect } from 'react'

import * as api from './api/api'
import './App.css'
import type { Policy } from './types/policy.type'

import { AddPolicyForm } from './add-policy/FormAddPolicy'

function App() {
  const [policies, setPolicies] = useState<Array<Policy>>([])
  const fetchPets = async () => {
    api.getPolicies().then(({ policies }) => {
      debugger
      setPolicies(policies)
    })
  }

  useEffect(() => {
    fetchPets()
  }, [])
  return (
    <div className="App">
      <h1>Pet Insurance Manager 5000</h1>
      {Array.isArray(policies) && policies.length > 0 ? (
        <>
          <h2>Here are your pets</h2>
          <div>
            <table className="table-pets">
              <tbody>
                {policies.map(({ id, name, age, petType, insuranceStatus }) => (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{petType.label}</td>
                    <td>{insuranceStatus.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div>Sorry, you have no pets</div>
      )}
      <AddPolicyForm onAdd={fetchPets} />
    </div>
  )
}

export default App
