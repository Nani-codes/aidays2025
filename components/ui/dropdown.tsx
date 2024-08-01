import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button 
        onClick={toggleDropdown}
        className="background-animate
          text-md
          rounded
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-blue-500
          px-10
          py-5
          font-bold uppercase text-white subpixel-antialiased"
      >
        Past Years
      </Button>
      {isOpen && (
        <div className='Dropdown show'>
          <Link href="https://aidays.io/2024">AI Days 2024</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;