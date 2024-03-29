import { useState } from 'react';

export const useForm = (callback, initialState = {}, validate) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (Object.keys(validate(values)).length === 0) {
			callback();
			setValues(initialState);
		} else {
			setErrors(validate(values));
		}
	};

	return {
		handleChange,
		handleSubmit,
		errors,
		values
	};
};
