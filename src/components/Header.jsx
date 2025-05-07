import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { TbRosetteDiscount } from "react-icons/tb";
import { IoHelpBuoySharp } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
    const[toggle, setToggle] = useState(false);

    const showSideMenu = () => {
       setToggle(true);   
    };

    const hideSideMenu = () => {
      setToggle(false);
    }

    const links=[
      {
        icon: <IoSearch />,
        name:"Search"
      },

      {
        icon: <TbRosetteDiscount />,
        name:"Offers",
        sup:"new"
      },

      {
        icon: <IoHelpBuoySharp />,
        name:"Help"
      },

      {
        icon: <FaSignInAlt />,
        name:"Signin"
      },

      {
        icon: <FaCartShopping />,
        name:"cart",
        sup:"(0)"
      }
    ];
    
  return (
    <>
      <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity: toggle ? 1: 0,
        visibility: toggle ? "visible":"hidden",
         zIndex:99999            //this z index is for the handle carot button
       }}>
            <div onClick={(e) =>{
                    e.stopPropagation();
            }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
            style={{
              left: toggle ? '0%' : '-100%'
            }}
            
            ></div>
      </div>
       
      <header className="p-4 shadow-xl text-[#686b78] bg-white sticky top-0 z-[9999] w-full h-16">
 
            <div className='max-w-[1200px] mx-auto  flex items-center'>

                    {/* this div is for the logo */}

                    <div className='w-[80px]'>
                        <img src="image/logo.png" className='w-full' alt="logo" />
                    </div>

                    {/* this div is for the search  */}
                    
                    <div className=''>
                      <span className='font-bold border-b-[3px] border-[black] text-[15px]'>Parvati Gaon</span>, Pune, Maharashtra, India < RxCaretDown  fontSize={25} className='font-bold inline text-[#fc8019] cursor-pointer' onClick={showSideMenu}/>
                    </div>

                    <nav className='hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px] '>
                      {
                        links.map(
                          (link,index) => {
                           return <li key={index} className='flex items-center gap-2 hover:text-[#fc8019] cursor-pointer'>
                              {link.icon}
                              {link.name}
                              <sup>{link.sup}</sup>
                            </li>
                          }
                        )
                      }
                      
                    </nav>

            </div>
      </header>
    </>
  )
  
}
