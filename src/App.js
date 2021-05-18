import './css/App.css';
import Navigation from './components/Navigation';
import Events from './components/Events';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      
      <Events/>
      
      <Footer/>
    </div>
  );
}

export default App;
