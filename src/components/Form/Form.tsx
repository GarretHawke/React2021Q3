import React, { useState } from 'react';
import './Form.scss';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [_gender, _setGender] = useState('');
  const [_race, _setRace] = useState('');
  const [_class, _setClass] = useState('');
  const [agree, setAgree] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <form className="form" onSubmit={ submitHandler }>
      <label className="label" htmlFor="firstName">
        First Name:
        <input type="text" name="firstName" value={firstName} onChange={event => setFirstName(event.target.value)}/>
      </label>
      <label className="label" htmlFor="lastName">
        Last Name:
        <input type="text" name="lastName" value={lastName} onChange={event => setLastName(event.target.value)}/>
      </label>
      <label className="label" htmlFor="birthDate">
        Birth date:
        <input type="date" name="birthDate" value={birthDate} onChange={event => setBirthDate(event.target.value)} />
      </label>
      <label className="label" htmlFor="gender">
        Gender:
        <select className="select" name="gender" value={ _gender } onChange={ event => _setGender(event?.target.value) }>
          <option>Male</option>
          <option>Female</option>
        </select>
      </label>
      <label className="label" htmlFor="race">
        Race:
        <select className="select" name="race" value={ _race } onChange={ event => _setRace(event?.target.value) }>
          <option>Human</option>
          <option>Elf</option>
          <option>Dwarf</option>
          <option>Qunari</option>
        </select>
      </label>
      <label className="label" htmlFor="class">
        Class:
        <select className="select" name="class" value={ _class } onChange={ event => _setClass(event?.target.value) }>
          <option>Warrior</option>
          <option>rouge</option>
          <option>mage</option>
        </select>
      </label>
      <label className="label" htmlFor="checkBox">
        I agree to faithfully serve the Inquisition
        <input type="checkbox" name="checkBox" checked={ agree } onChange={ () => {setAgree(!agree); console.log(!agree)} } />
      </label>
      <div className="submit-button">
        <input type="submit" value="Submit"></input>
      </div>
    </form>
  );
}

export default Form;