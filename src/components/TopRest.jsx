import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from './Card';

export default function TopRest() {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchTopRestaurant = async () => {
        const response = await fetch("/restaurantChains.json");
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    const nextSlide = () => {
        if (slide + 3 >= data.length) return;
        setSlide(slide + 3);
    }

    const prevSlide = () => {
        if (slide === 0) return;
        setSlide(slide - 3);
    }

    return (
        <div className='max-w-[1200px] mx-auto px-2'>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>Top restaurant chains in Pune</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center h-[30px] w-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center h-[30px] w-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            <div className='flex gap-7 overflow-hidden'>
                {
                    data.slice(slide, slide + 8).map((d, i) => (
                        <Card width="w-full md:w-[273px] " {...d} key={i} />
                    ))
                }
            </div>
            <hr className='my-4 border-[2px]'></hr>
        </div>
    )
}
