import React, { useEffect, useState } from 'react';
import './Form.scss';
import IFormValues from '@/components/shared';

const Form = ({ setFormValues }: {setFormValues: React.Dispatch<React.SetStateAction<IFormValues[] | []>>}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [_race, _setRace] = useState('');
  const [_class, _setClass] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [isMale, setMale] = useState(true);

  useEffect(() => {
    validate();
  }, [firstName, lastName, birthDate, isMale, _race, _class, agree]);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues(state => [...state, { firstName, lastName, birthDate, isMale, _race, _class, agree }]);
      resetValues();
    }
  }

  const validate = () => {
    setErrors({});
    if (firstName === '') {
      setErrors(state => ({...state, firstName}));
    }
    if (lastName === '') {
      setErrors(state => ({...state, lastName}));
    }
    if (birthDate === '') {
      setErrors(state => ({...state, birthDate}));
    }
    if (_race === '') {
      setErrors(state => ({...state, _race}));
    }
    if (_class === '') {
      setErrors(state => ({...state, _class}));
    }
    if (!agree) {
      setErrors(state => ({...state, agree}));
    }
  }

  const resetValues = () => {
    setFirstName('');
    setLastName('');
    setBirthDate('');
    setMale(true);
    _setRace('');
    _setClass('');
    setAgree(false);
  }

  return (
    <form className="form" onSubmit={ submitHandler }>
      <label className="label" htmlFor="firstName">
        <p>
          First Name 
          { errors?.firstName !== undefined && <span className="error-message">* required</span> }
        </p>
        <input type="text" name="firstName" value={firstName} onChange={event => setFirstName(event.target.value)} placeholder="Garret"/>
      </label>
      <label className="label" htmlFor="lastName">
        <p>
          Last Name
          { errors?.lastName !== undefined && <span className="error-message">* required</span> }
        </p>
        <input type="text" name="lastName" value={lastName} onChange={event => setLastName(event.target.value)} placeholder="Hawke" />
      </label>
      <label className="label" htmlFor="birthDate">
        <p>
          Birth date
          { errors?.birthDate !== undefined && <span className="error-message">* required</span> }
        </p>
        <input type="date" name="birthDate" value={birthDate} onChange={event => setBirthDate(event.target.value)} />
      </label>
      <label className="label" htmlFor="gender">
        <p>
          Gender
        </p>
        <div className={ isMale ? 'switch-container' : 'switch-container female' } >
          <label className={ isMale ?  'switch-text switch-active' : 'switch-text' } id="switch-train">male</label>
          <label className='switch'>
            <input type="checkbox" className='switch-input' onChange={() => setMale(!isMale)} />
            <span className={ isMale ? 'switch-slider' : 'switch-slider female' }></span>
          </label>
          <label className={ isMale ?  'switch-text' : 'switch-text switch-active' } id="switch-play">female</label>
        </div>
      </label>
      <label className="label" htmlFor="race">
        <p>
          Race
          { errors?._race !== undefined && <span className="error-message">* required</span> }
        </p>
        <select className="select" name="race" value={ _race } onChange={ event => _setRace(event?.target.value) }>
        <option disabled value="">--select your race--</option>
          <option>Human</option>
          <option>Elf</option>
          <option>Dwarf</option>
          <option>Qunari</option>
        </select>
      </label>
      <label className="label" htmlFor="class">
        <p>
          Class
          { errors?._class !== undefined && <span className="error-message">* required</span> }
        </p>
        <select className="select" name="class" value={ _class } onChange={ event => _setClass(event?.target.value) }>
        <option disabled value="">--select your class--</option>
          <option>Warrior</option>
          <option>rouge</option>
          <option>mage</option>
        </select>
      </label>
      <label className="label" htmlFor="checkBox">
        <p className="agree-message">I agree to serve the Inquisition faithfully</p>
        <input type="checkbox" name="checkBox" checked={ agree } onChange={ () => {setAgree(!agree) }} />
      </label>
      <div className="submit-button">
        <input type="submit" value="Submit"></input>
      </div>
      { errors?.agree !== undefined && <span className="error-message">*agree should be checked</span> } 
    </form>
  );
}

export default Form;