import { useMemo, useRef, useCallback } from 'react';

import { useForm } from '../util/hooks';
import { useGlobalContext } from '../context/Context';

const Form = () => {
  const { people, addPerson } = useGlobalContext();
  const firstNameInput = useRef(null);

  const validatePersonForm = (values) => {
    const errors = {};

    if (values.firstName.trim() === '') {
      errors.firstName = 'First name must not be empty';
    }

    if (values.lastName.trim() === '') {
      errors.lastName = 'Last name must not be empty';
    }

    return errors;
  };

  const addPersonFromForm = () => {
    const newPerson = {
      id: new Date().getTime().toString(),
      ...values,
    };

    addPerson(newPerson);
    firstNameInput.current.focus();
  };

  const { values, errors, handleChange, handleSubmit } = useForm(addPersonFromForm, { firstName: '', lastName: '' }, validatePersonForm);

  const printNumberOfPeople = useCallback(() => {
    console.log(`Number of people: ${people.length}`)
  }, [people]);

  useMemo(() => printNumberOfPeople(), [printNumberOfPeople]);

  useMemo(() => {
    console.log(`Number of people: ${people.length}`);
  }, [people.length]);

  return (
    <div className="col">
      <h2>Add a person:</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors.firstName && 'is-invalid'}`}
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange}
            ref={firstNameInput}
          />
          {errors.firstName && (
            <div className="invalid-feedback">
              {errors.firstName}
            </div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors.lastName && 'is-invalid'}`}
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <div className="invalid-feedback">
              {errors.lastName}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-success">Add person</button>
      </form>
    </div>
  );
};

export default Form;
