import './App.css';
import Basic from './Basic.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
            <div className="card-body">
                <h3>Register With Us</h3>
                <br/>
                <Basic/>
            </div>
        </div>
      </header>
    </div>

  );
}

export default App;
