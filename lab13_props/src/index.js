import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './comments'
// import all images
import avataruser1 from './images/batman.png';
import avataruser2 from './images/jason.png';
import avataruser3 from './images/firefighter.png';

const App = function(){
  return(
    <>
    <h1 style={{textAlign:"center"}}>Muhammad Zahoor</h1>
      <section className='container'>
          <User image={avataruser1} name="Batman" date="11/12/24" msg="I am Batman!"/>
          <User image={avataruser2} name="Jason" date="10/31/24" msg="Need more rest!"/>
          <User image={avataruser3} name="Firefighter" date="10/16/24" msg="Great Job!"/>
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
