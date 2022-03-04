import React,{useEffect,useState} from 'react';
import Message from "../assets/img/message.jpg"
import "../../App.css"

const Header = () => {
   
    return ( 
        <>
        <nav className='header'>
           <div>OutLook</div>
           <div>
              <img src={Message} width="50px" height="50px" alt="" />
              {/* <p>{mUnread}</p> */}
           </div>
        </nav>
        
        </>
     );
}
 
export default Header;