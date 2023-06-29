import {useState} from "react"; 
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Users } from './components/Users';
import { Form } from './components/Form';

import './styles/main.scss';

export const App = () => {
  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <div className="App">
      <Header />
      <Banner />
        <div className="main-container">
          <Users isUpdated={isUpdated} />
          <Form setIsUpdated={setIsUpdated} isUpdated={isUpdated}/>
        </div>
    </div>
  );
}
