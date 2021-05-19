import './css/App.css';
import './css/Utils.css';
import Navigation from './components/Navigation';
import Events from './components/Events';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">

      {/* NAVBAR */}
      <Navigation/>

      {/* EVENTS LIST */}
      <Events/>

      {/* EVENT SUBMIT */}
      <Footer/>
      
    </div>
  );
}

export default App;
