
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css'
import Layout from './Layout'
import Home from '../pages/Home'
import NoFound from '../pages/NoFound'
import ListCharacters from '../pages/ListCharacters'
import ListEpisodes from '../pages/ListEpisodes'
import Detail from '../pages/Detail'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={ListCharacters} />
          <Route exact path="/episodes" component={ListEpisodes} />
          <Route exact path="/detail" component={Detail} />
          <Route component={NoFound} />
        </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
