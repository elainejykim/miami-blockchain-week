import './css/App.css';
import './css/Utils.css';
import Navigation from './components/Navigation';
import Events from './components/Events';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import SubmitEvent from './components/SubmitEvent';
import SubscribeForm from './components/SubscribeForm';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>  
        <Navigation/>

        <Switch>
          <Route path="/" exact component={() => <Events collection="miami"/>} />
          <Route path="/miami" exact component={() => <Events collection="miami"/>} />
          <Route path="/paris" exact component={() => <ComingSoon collection="paris"/>} />
          <Route path="/berlin" exact component={() => <ComingSoon collection="berlin"/>} />
          <Route path="/submit-event" exact component={() => <SubmitEvent />} />
          <Route path="/subscribe" exact component={() => <SubscribeForm />} />
        </Switch>

        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;