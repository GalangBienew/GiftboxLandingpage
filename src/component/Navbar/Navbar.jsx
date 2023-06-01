import React, { useState } from "react";
// import { FiUser } from "react-icons/fi";
import { TfiAlignCenter } from "react-icons/tfi";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
const Navbars = () => {
  const [openHamburger,setopenHamburger] = useState(false);

  const handleShowbar = () => {
    setopenHamburger(!openHamburger);
  };
    
  return (
    <>
      <header>
        <div className='Navbars'>
          <div className="logo"> <a href='#'>AllForYouGift</a></div>
          <ul className='links'>
            <li><Link to ="/">Home</Link></li>
            <li className="Reminder"><Link to="/reminder">Create reminder Birtdays</Link></li>
            <li><Link to ="/Test">Test</Link></li>

          </ul>
          <div   className='action_button'>
          </div>
          <div className="toggle_btn" onClick={handleShowbar} >     
            <TfiAlignCenter   />
          </div>
        </div>
        <div>

        </div>
        <div className={`dropdown_menu ${openHamburger && "active"}` }>
          <li><a href='/'>Home</a></li>           
          <li className="Reminder"><Link to="/reminder">Create reminder Birtdays</Link></li>      
        </div>
                
      </header>

    </>
  );
};

export default Navbars;