import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-router-dom';



export function App() {


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  const [mode, setMode] = useState('light');


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been activated.", "success");
      document.title = 'TextUtils - Dark Mode';


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been activated.", "success");
      document.title = 'TextUtils - Light Mode';

    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtills' About='About' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">

          {/* <Switch>
         
            <Route exact path="/home"> */}
                <TextForm showAlert={showAlert} heading='Enter your text to analyze' mode={mode} />
            {/* </Route>
            
            <Route exact path="/a">
                <About />
            </Route>
          </Switch> */}
        </div>

      {/* </Router> */}


    </>
  );
}

export default App;
