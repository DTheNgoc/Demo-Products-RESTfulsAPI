import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import NavLinkMobile from './NavLinkMobile';
import CartButton from './CartButton';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md flex justify-between items-center 
                        rounded-b-lg sticky top-0 z-50"
    >
        <Logo />
        <NavLinks />
        <div className='flex items-center gap-1'>
            <NavLinkMobile/>
            <CartButton/>
        </div>
    </header>
  );
};

export default Header;
