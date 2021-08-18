import NewestPerson from './components/NewestPerson';
import People from './components/People';
import Form from './components/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <Form />
        <People />
        <NewestPerson />
      </div>
    </div>
  );
};

export default App;
