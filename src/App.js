import './App.css';
import Events from './components/Events';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="heading">Miami Blockchain Week</h1>
        <h3 id="sub-heading">June 1st - June 7th 2021</h3>
      </header>
      
      <div class="container">
        <Events class="container" id="events"></Events>
      </div>
      
      <footer id="eventForm">
        <button><a href="https://forms.gle/21MstM5hq7p6LNyN9">
          Don't see you event listed?
        </a></button>
      </footer>

    </div>
  );
}

export default App;
