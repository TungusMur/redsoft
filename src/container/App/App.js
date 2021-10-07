import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
import './App.scss';
import Footer from '../Footer';

const App = () => (
  <div className="app">
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  </div>
);

export default App;
