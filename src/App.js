import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Deals from './pages/Deals'
import Cart from './pages/Cart'
import ItemPage from './pages/ItemPage'
import NavigationBar from './components/NavigationBar'


function App() {

  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/deals' component={Deals} />
        <Route path='/cart' component={Cart} />
        <Route path='/item/:id' component={ItemPage} />
      </Switch>
    </>
  );
}

export default App;
