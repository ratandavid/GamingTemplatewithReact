import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from "./Component/Navigation/Nav";
import './App.css';
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import About from "./Component/About us/About/About"
import Community from './Component/Community/Community/Community';
import Store from './Component/Store/Store/Store';






function App() {

  return (

    <div className="App">
      <Router>

        <div className="row">
          <div className="col-xl-12">
            <Navigation />

          </div>
        </div>
        <div className="row">
        <div className="col-md-12 col-xl-12">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Community">
              <Community />
            </Route>
            <Route path="/Store">
              <Store />
            </Route>
          </Switch>
        </div>
        </div>

      </Router>
      
      <Footer/>

    </div>
  );
}

export default App;
