import { Switch, Route } from 'react-router-dom';
import Home from '../Home';

const Description = () => (
  <div className="description">
    <Switch>
      <Route exact path={`/`} component={Home} />
      <Route path={`/catalog`} component={() => <h1>123</h1>} />
    </Switch>
  </div>
);

export default Description;
