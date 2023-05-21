import { ConnectWallet } from '@thirdweb-dev/react';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai';


const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNavbarOpen = () => {
    setOpen(!open);
  }

  return (
    <nav className="connect">
      <div className='w-full h-6 px-6 flerx justify-betwen items-center'>
        <h1>Logo</h1>
        <ul className='hidden md:flex cursor-pointer space-x-6'>
          <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center' }} /> 
        </ul>
        <div onClick={handleNavbarOpen} className='md:hidden cursor-pointer'>
          {(!open) ? <AiOutlineMenuFold size={25}/> : <AiOutlineClose /> }
          <ul className='absolute top-14 left-0 w-full h-screen py-12'>
            <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center' }} /> 
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;