import { useGlobalContext } from '../context/Context';

const PeopleCount = () => {
    const { people } = useGlobalContext();

    return <h2 className='text-center mt-4'>{people.length}</h2>;
};

export default PeopleCount;
