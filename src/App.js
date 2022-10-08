import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
// import {
//   Route,
//   Link,
//   Routes,
//   BrowserRouter
// } from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Textform heading = "Enter your text" showAlert={showAlert}/>
  //   },
  // ]);
  const [mood, setMood] = useState('light')  //define whether dark mode is on or not.
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const changeMode = (cls) => {
    if (mood === 'light') {
      setMood('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("Dark Mode has been enabled.", "success")
    }
    else {
      setMood('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode has been enabled.", "success")
    }
  }
  return (
    <>
      <Navbar title='playWithText' aboutText='About us' mode={mood} toggleMode={changeMode} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Textform heading ="Enter your text" showAlert={showAlert}/>
      </div>
      <About mode={mood}/>
    </>
  );
}

export default App;


// npm install
// npm start
// npm i
// npm run build
// npx create-react-app
// npm create-react-app my-app(appname)

/*to publish react-app to github
(remove router App.js)
(instead of href="/" write href="#")
- in package.json on top write : "homepage": "https://myusername.github.io/appname"
- run npm install --save gh-pages
- in scripts of package.json add two lines: 
    "predeploy" : "npm run build"
    "deploy": "gh-pages -d build"
- npm run deploy

the  it'll ask for login and login , publishing will be done after some time
*/
