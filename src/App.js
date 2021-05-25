import './App.css';
import config from './config/config'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Index from './Components/index'
import Details from './Components/details'
import HowItWorks from './Components/how_it_works'
import Upload from './Components/upload'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Menu /> */}
        <Switch>
          <Route path={`${config.baseUrl}`} exact component={Index} />
          <Route path={`${config.baseUrl}details/:id`} exact component={Details} />
          <Route path={`${config.baseUrl}how_it_works`} exact component={HowItWorks} />
          <Route path={`${config.baseUrl}upload`} exact component={Upload} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}
export default App;