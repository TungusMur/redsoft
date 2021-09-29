import { Switch, Route } from 'react-router-dom';
import './Heading.scss';

const Heading = () => (
  <div className="heading">
    <Switch>
      <Route exact path={`/`} component={() => <h1>Картины эпохи Возрождения</h1>} />
      <Route path={`/catalog`} component={() => <h1>Каталог</h1>} />
      <Route path={`/delivery`} component={() => <h1>Доставка</h1>} />
      <Route path={`/payment`} component={() => <h1>Оплата</h1>} />
      <Route path={`/сontacts`} component={() => <h1>Контакты</h1>} />
      <Route path={`/gallery`} component={() => <h1>О галерее</h1>} />
    </Switch>
  </div>
);

export default Heading;
