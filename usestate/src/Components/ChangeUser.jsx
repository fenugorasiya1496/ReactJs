import React from 'react'
import { useState } from 'react'

const ChangeUser = () => {
    const [Data, setData] = useState({username:"Test_User",role:"Tester" , photo:"https://www.cats.org.uk/media/13139/220325case013.jpg"});

    function Change(){
      if(Data.username === "Test_User"){
          let new_obj = {...Data};
        console.log(new_obj)
        new_obj.username = "Developer_user";
        new_obj.role = "Developer"
        new_obj.photo = "https://www.purina.in/sites/default/files/styles/hero_image_regular_desktop/public/2025-12/How%20long%20do%20cats%20live__0.jpg?itok=0V9sLWM7"
        setData(new_obj)
      }else{
          let new_obj = {...Data};
        console.log(new_obj)
        new_obj.username = "Test_User";
        new_obj.role = "Tester";
        new_obj.photo = "https://www.cats.org.uk/media/13139/220325case013.jpg";
        setData(new_obj)
      }
    }

  return (
    <>
    <div className='mx-auto px-4 py-2 mt-10 bg-[#686767] rounded-xl w-full max-w-sm h-auto text-center text-2xl font-bold'>
        <img src={Data.photo} alt=""  className='w-36 h-36 object-cover rounded-full my-4 mx-auto'/>
        <h1 className='bg-[#555] w-full rounded-xl px-4 py-2 active:bg-orange-400 select-none mb-2'>{Data.username}</h1>
        <h3 className='bg-[#555] w-full rounded-xl px-4 py-2 active:bg-orange-400 select-none mb-2'>{Data.role}</h3>
        <button className='w-full bg-orange-500 px-4 py-2 my-2 rounded-xl font-bold hover:text-orange-100 hover:scale-105 transition select-none' onClick={Change}>Switch User</button>
    </div>
    </>
  )
}

export default ChangeUser