import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
   return (
      <div>
         <div className="navbar">
               <div className="navbar__links">
                  <Link to="/about">0 сайте</Link>
                  <Link to="/posts">Посты</Link>
               </div>
            </div>
      </div>
   );
};

export default Navbar;
