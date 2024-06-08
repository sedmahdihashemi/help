'use client'

import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { TfiAlignRight } from "react-icons/tfi";
import { RiCloseLargeLine } from "react-icons/ri";
import Link from 'next/link';

const myCountext = React.createContext()



export default function Header({shutSt}) {
    console.log(shutSt);
    
   
   

    return (

        <header className='w-full flex flex-wrap'>
            
            <Lefthead />
            {/* <Midhead /> */}
            <myCountext.Provider value={shutSt}>
            <Righthead />

            </myCountext.Provider>
            <Shutter shutSt={shutSt} />

        </header>
    )
}

function Lefthead() {
    return (
        <div className='w-3/12 flex justify-center items-center border py-7 *:border *:border-red-600'>
            <h2 className='font-extrabold text-3xl cursor-pointer'>M / H </h2>
            
        </div>

    )
}
// function Midhead (){
//     return(

//     )
// }
function Righthead() {
    const [isOpen, setIsOpen] = useState(false);
    const _close = useRef()
    const _open = useRef()
    
    const shutSt = useContext(myCountext)
    console.log(shutSt);





    const _openClose = (e) => {
        if (isOpen == false) {
            // console.log(shutSt);


            setIsOpen(!isOpen);
            _open.current.style.display = 'none';
            _close.current.style.display = 'flex';
            // bear.style.display = 'none'





        } else {
            setIsOpen(false)
            _open.current.style.display = 'flex';
            _close.current.style.display = 'none';
        }


    };

    return (
        <div className="w-9/12 lg:w-3/12 border flex flex-wrap justify-end items-center">
            
            <section className="border flex cursor-pointer lg:hidden">
                <i onClick={_openClose} className="text-3xl pe-3" ref={_open}>
                    <TfiAlignRight />
                </i>
                <i onClick={_openClose} className="text-3xl pe-3 hidden" ref={_close}>
                    <RiCloseLargeLine />
                </i>

            </section>
          

        </div>
    );
}


function Shutter() {
    const shutRef = useRef();
    const [shutSt, setShutSt] = useState([]);
    console.log(shutSt);
    
    useEffect(() => {
        
        setShutSt(shutRef.current);
    }, []);







    return (
        <div className='w-full  flex-wrap *:border *:w-1/2  bg-red-300 flex' ref={shutRef}>
            

            <section className='flex justify-center items-center  flex-wrap'>
                <Link className='w-full bg-slate-500 h-full flex justify-center py-3' href={'./about'}>about</Link>
            </section>
            <section className='flex justify-center items-center  flex-wrap'>
                <Link className='w-full flex justify-center py-3' href={'./about'}>about</Link>
            </section>
            <section className='flex justify-center items-center  flex-wrap'>
                <Link className='w-full flex justify-center py-3' href={'./about'}>about</Link>
            </section>
            <section className='flex justify-center items-center  flex-wrap'>
                <Link className='w-full flex justify-center py-3' href={'./about'}>about</Link>
            </section>




        </div>
    )
}
