// import logo from './logo.svg';
import './App.css';
import Myform from './components/Myform';
import Navbaar from './components/Navbaar';
import React,{useState} from 'react'
import Alert from './components/Alert';



function App() {
  const [pagemode, setpagemode] = useState("light")
  const enableDarkmodefuc= ()=>{
    if(pagemode==="dark"){
      setpagemode("light")
    }else{
      setpagemode("dark")

    }
  }

  return (
<>
<Navbaar mode={pagemode} enableDarkmode={enableDarkmodefuc}/>
<Alert msg="this is alert"/>
<Myform/>



</>
  );
}

export default App;
