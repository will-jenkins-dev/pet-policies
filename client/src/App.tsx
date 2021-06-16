import React, { useState, useEffect } from 'react'

import { fetchPets } from './api/api'
import './App.css'
import type { Pet, PetType, InsuranceStatus } from './types/pet.type'

import { AddPetForm } from './add-pet/FormAddPet'

const petLabels: Array<string> = []

function App() {
  const [pets, setPets] = useState<Array<Pet>>([])
  useEffect(() => {
    fetchPets().then(({ pets, insuranceStatuses, petTypes }) => {
      setPets(pets)
    })
  }, [])
  return (
    <div className="App">
      <h1>Pet Insurance Manager 5000</h1>
      {Array.isArray(pets) && pets.length > 0 ? (
        <>
          <h2>Here are your pets</h2>
          <div>
            <table className="table-pets">
              <tbody>
                {pets.map(({ name, age, type, status }) => (
                  <tr>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{type.label}</td>
                    <td>{status.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div>Sorry, you have no pets</div>
      )}
      <AddPetForm />
    </div>
  )
}

export default App
