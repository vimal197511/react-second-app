import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Add from './component/add';
import Hove from './component/hover';
import Hoc from './component/hoc';
import Dashboard from './FirstProject/MyApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './FirstProject/home';
import About from './FirstProject/about';
import Services from './FirstProject/services';
import Contact from './FirstProject/contact';
import Main from './w3project/mainpage';
import Pageone from './w3project/firstpage';
import Pagetwo from './w3project/secondpage';
import Pagethree from './w3project/thirdpage';
import Pagefour from './w3project/fourthpage';
import Hover from './component/hover';
import Impo from './stateManagement/important';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    /* <Impo/> */
  // </React.StrictMode>

   <BrowserRouter>
 <Main/>

<Routes>
    <Route path="/pageone" element={<Pageone/>}/>
    <Route path="/pagetwo" element={<Pagetwo/>}/>
    <Route path='/pagethree' element={<Pagethree/>}/>
    <Route path='/pagefour' element={<Pagefour/>}/>
</Routes>
</BrowserRouter> 


  
    // <BrowserRouter> 
          /* <div className='headercontainter' style={{backgroundColor:'black',width:"100vw",height:"40px",color:'white'}}>  
        <ul >
        <li>Home</li>
        <li>Home</li>
         <li>Home</li>
       </ul> 
     </div>     */
    //  <Dashboard/> 
        /* <div style={{backgroundColor:'black',width:"100vw",height:"40px",position:"fixed",bottom:"0px"}}></div>     */
    //    <Routes>
    //    <Route path='/home' element={<Home/>} />
    //  <Route path='/about' element={<About/>} />
    //   <Route path='/contact' element={<Contact />} />
    //   <Route path='/services' element={<Services />} />
    //  </Routes>
  //  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
