import { Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Home from './components/pages/Home'
import Deals from './components/pages/Deals'
import Cart from './components/pages/Cart'
import NavigationBar from './components/NavigationBar'


function App() {

  return (
    <Container fluid='lg'>
      <NavigationBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/deals' component={Deals} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Container>
  );
}

export default App;
