import React from 'react';
import ReactDOM from 'react-dom/client';
// import all images
import avataruser1 from './images/batman.png';
import avataruser2 from './images/jason.png';
import avataruser3 from './images/firefighter.png';

//import files
import User_feedback from './User_feedback';
import './index.css';
import User from './comments'


const App = function(){
  return(
    <>
    <h1 style={{textAlign:"center"}}>Muhammad Zahoor</h1>
      <section className='container'>
       
          
  
      </section>

      <section className='container'>
        {/*user 1*/}
        <User_feedback username= "batman"><User image={avataruser1} date="11/12/24" msg="I am Batman!"/></User_feedback>

         {/*user 2*/}
         <User_feedback username="Jason"><User image={avataruser2} date="10/31/24" msg="Need more rest!"/></User_feedback>

         {/*User 3*/}
         <User_feedback username="Firefighter"><User image={avataruser3} date="10/16/24" msg="Great Job!"/></User_feedback>

      </section>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
