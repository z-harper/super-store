import { Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Deals from './components/pages/Deals'
import Cart from './components/pages/Cart'
import NavigationBar from './components/NavigationBar'


function App() {

  return (
    <div className='container-fluid'>
      <NavigationBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/deals' component={Deals} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
