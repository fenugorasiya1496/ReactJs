import React from 'react'
import { useState } from 'react';

const Increase = () => {
     const [Number, setNumber] = useState(0);
  // Number (first variable) ==> Read only value (you can't this variable value)
  // setNumber (second variable) ==> write only value (if you want to change number variable's value use setNumber)

  function IncreaseNum(){
    setNumber(Number + 1);
  }
  function DecreaseNum(){
   if(Number>0) return setNumber(Number - 1);
  }

   function IncreaseNum5(){
    setNumber(Number + 5);
  }
  function DecreaseNum5(){
   if(Number>4) return setNumber(Number - 5);
  }

  function Reset(){
    setNumber(0)
  }
  return (
 <>
     <section>
      <h1 className='text-center text-3xl font-extrabold mt-10'>Usestate : Change data (variable ne difine karva mate and value change krva mate)</h1>
      <p className='text-center mt-5 font-bold'>Increase And Decrease Number</p>
      <div className='w-72 h-72 text-9xl font-bold px-4 py-2 bg-[#222] rounded-xl text-[#555] flex items-center justify-center mx-auto mt-10'>{Number}</div>
        <div className='flex items-center justify-center mt-5 gap-6'>
      <button className='bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-blue-950' onClick={IncreaseNum}>Increase</button>
      <button className='bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-blue-950' onClick={DecreaseNum}>Decrease</button>
       <button className='bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-blue-950' onClick={IncreaseNum5}>Increase 5</button>
      <button className='bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-blue-950' onClick={DecreaseNum5}>Decrease 5</button>
      <button className='bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-blue-950' onClick={Reset}>Reset</button>
        </div>
    </section>
 </>
  )
}

export default Increase