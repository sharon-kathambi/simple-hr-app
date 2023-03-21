import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [wage, setWage] = useState(0)

  const [employeeList, setEmployeeList] = useState([])

  

  function handleSubmit(){
    const employee = {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }
    Axios.post('http://localhost:3001/create', employee).then(() => {
      console.log('success')
    })
  }

  return (
    <div className="App">
      <div className='information'>
      <label>Name</label>
      <input 
      type='text' 
      onChange={(event)=> setName(event.target.value)}>
      </input>
      <label>Age</label>
      <input 
      type='number'
      onChange={(event)=> setAge(event.target.value)}
      ></input>
      <label>Country</label>
      <input 
      type='text'
      onChange={(event)=> setCountry(event.target.value)}
      ></input>
      <label>Position</label>
      <input 
      type='text'
      onChange={(event)=> setPosition(event.target.value)}
      ></input>
      <label>Wage(year)</label>
      <input 
      type='number'
      onChange={(event)=> setWage(event.target.value)}></input>
      <button onClick = {handleSubmit}>Add Employee</button>

      </div>
    </div>
  );
}

export default App;
