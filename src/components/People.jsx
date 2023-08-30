import Person from './Person';
import { useGlobalContext } from '../context/Context';

const People = () => {
  const { people } = useGlobalContext();

  return (
    <div className='col'>
      <h2>People</h2>
      <hr />
      {people.map(person => (
        <Person key={person.id} {...person} />
      ))}
    </div>
  );
};

export default People;
