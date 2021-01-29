
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css'
import Layout from './Layout'
import Home from '../pages/Home'
import NoFound from '../pages/NoFound'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoFound} />
        </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
