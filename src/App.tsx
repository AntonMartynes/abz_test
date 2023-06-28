
import './styles/main.scss';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Users } from './components/Users';

function App() {
  return (
    <div className="App">
     <Header />
     <Banner />
      <div className="main-container">
        <Users />
      </div>
    </div>
  );
}

export default App;
