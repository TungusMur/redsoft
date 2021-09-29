import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
import './App.scss';

const App = () => (
  <div className="app">
    <Router>
      <Header />
      <Main />
    </Router>
  </div>
);

export default App;
