import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';
import { CiSearch } from "react-icons/ci";
import { AiOutlineSwap } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";

export default function OnlineDelivery() {
    const [data, setData] = useState([]);
    const componentRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current) {
                const rect = componentRef.current.getBoundingClientRect();
                setIsAtTop(rect.top <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
        const fetchTopRestaurant = async () => {
           const response = await fetch("/restaurantChains.json");
           const apiData = await response.json();
           setData(apiData);
        }
    
        useEffect(
            () => {
                fetchTopRestaurant();
            }
        )
  return (
    <div className='max-w-[1200px] mx-auto px-2' ref={componentRef}>
                
                <div className='flex my-3 items-center justify-between'>
                    <div className='text-[25px] font-bold'>Restaurants with online food delivery pune</div>
                </div>

                <div className={isAtTop ? 'fixed top-0 z-[9999999] bg-white w-full left-0' : ''}>
                        <div className='max-w-[1200px] mx-auto flex my-4 gap-3 items-center overflow-x-auto '>
                            <div className='p-4 h-[60px] rounded-md shadow flex items-center'>Filter <AiOutlineSwap /></div>
                            <div className='p-4 h-[60px] rounded-md shadow flex items-center'>Sort by <RxCaretDown /></div>
                            <div className='p-4 h-[60px] rounded-md shadow flex items-center'>Book a Table</div>
                            <div className='p-4 h-[60px] rounded-md shadow flex items-center'>Within 5km</div>
                            <div className='p-4 h-[60px] rounded-md shadow flex items-center'>Rating 4+</div>
                            <div className='p-4 h-[60px] rounded-md shadow flex items-center'>Pure Veg</div>
                            <div className='p-4 h-[60px] rounded-md shadow flex items-center'>Serves Alcohol</div>

                            {/* Search Section - Same height but no full width */}
                            <div className='p-4 h-[60px] flex-1 min-w-[250px] rounded-md shadow-lg flex items-center bg-[#f0f0f5] text-bold text-[20px] gap-x-[10px]'>
                                Search for restaurant and food  <CiSearch/>
                            </div>
                        </div>


                </div>


                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    {
                        data.map(
                            (d, i) => {
                                return <Card {...d}/>
                            }
                        )
                    }
                </div>
    
    </div>
  )
}
