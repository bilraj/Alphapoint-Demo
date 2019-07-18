import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import Login from './Login/Login'



// function App() {
//   return (
//     <Login />

//   );
// }

// export default App;


class App extends React.Component {

  state = {
    loggedIn: false
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("MOUNTING")
  }

  render() {
    return (


      <Login />


    )
  }
}


export default App;
