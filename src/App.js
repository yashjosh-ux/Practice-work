import React,{useState} from 'react';
import Register from './RegistrationForm.js';
//import Hooks1 from './Hooks1.js'
import Login from './Login.js'

function App() {
  const [isRegistration,setisRegistration] = useState(true);

  const isLogin=()=>{
    setisRegistration(false);
  }
  return (
    <div className="App">
      {isRegistration?<Register isLogin={isLogin}/>:(<Login/>)}
    </div>
  );
}

export default App;