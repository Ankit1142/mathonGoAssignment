// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Leaderboard from './components/Leaderboard';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { Home } from './components/Home';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      document.body.color = 'blue';
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.color = 'black';
      showAlert("light mode has been enabled", "success");
    }

  }

  return (
    <>
      <Router>
        <Navbar title="Mathon-Go" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} toggleMode={toggleMode} />
        <div className="container my-3">
          <Switch>
            {/* <Route exact path="/about">
              <About />
            </Route> */}
             <Route exact path="/">
             <Home/>
            </Route>
            <Route exact path="/textform">
             <Textform/>
            </Route>
            <Route exact path="/leaderboard">
            <Leaderboard />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
