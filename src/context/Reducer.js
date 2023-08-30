import { ADD_PERSON } from './types';

const reducer = (state, action) => {
	if (action.type === ADD_PERSON) {
		const newPerson = [...state.people, action.payload];

		return {
			...state,
			people: newPerson,
		};
	}

	throw new Error('No matching action type');
};

export default reducer;
