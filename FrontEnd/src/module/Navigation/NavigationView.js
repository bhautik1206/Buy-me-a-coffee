import React from 'react';
import Navbar from '../../constants/navigation'

const NavigationView = () => {

  return (
  <div>
    {
      Navbar.map((value)=>value.text)
    }
  </div>
  );
};
 
export default NavigationView;
