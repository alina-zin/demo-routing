import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Switch>
      <Route path="/" component = {Home} exact />
      <Route path="/about" component = {About} exact />
    </Switch>
  );
}

export default App;
