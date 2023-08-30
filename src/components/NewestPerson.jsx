import { useEffect } from 'react';

import PeopleCount from './PeopleCount';
import { useGlobalContext } from '../context/Context';

const NewestPerson = () => {
	const { people } = useGlobalContext();
	const newestPerson = people[people.length - 1];

	useEffect(() => {
		const newestPersonName = `${newestPerson.firstName} ${newestPerson.lastName}`;
		document.title = newestPersonName;
		console.log('useEffect');
		return () => {
			console.log('Unmounted');
		}
	}, [newestPerson]);

	return (
		<div className='col col-sm-12'>
			<h2 className='mt-4 text-center'>
				Newest Person: {`${newestPerson.firstName} ${newestPerson.lastName}`}
			</h2>
			<PeopleCount />
		</div>
	);
};

export default NewestPerson;
