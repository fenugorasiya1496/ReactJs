import React from 'react'

const IceCream = () => {
    return (
        <>
            <div className="card bg-amber-50 rounded-4xl w-full max-w-sm overflow-hidden shadow-2xl">
                <img src="https://funcakes.com/content/uploads/2023/06/Ice-cream-recipe-960x960-c-default.jpg" alt="" className='rounded-t-4xl' />
                <div className="content px-6 py-2">
                    <h1 className='font-extrabold text-3xl'>Vanilla Ice Cream</h1>
                    <div className='more pt-4'>
                        <span className='text-[14px] bg-amber-100 m-2 rounded-full px-2 py-1'>Vegan</span>
                        <span className='text-[14px] bg-amber-100 m-2 rounded-full px-2 py-1'>Glutan free</span>
                        <span className='text-[14px] bg-amber-100 m-2 rounded-full px-2 py-1'>Organic</span>
                    </div>
                    <p className='text-gray-400 font-medium mt-5'>Lorem ipsum dolor, sit amet consectetur.</p>
                    <div className='more pt-1'>
                        <span className='text-[14px] bg-amber-50  rounded-full px-2 py-1'>Toppings</span>
                        <span className='text-[14px] bg-amber-50 border border-gray-300 rounded-full m-2 px-2 py-1'>Choco chips</span>
                        <span className='text-[14px] bg-amber-50 border border-gray-300 rounded-full m-2 px-2 py-1'>Nuts</span>
                    </div>
                    <div className="price flex items-center justify-between mt-7">
                        <div className="display-block">

                            <h1 className='rounded-full px-3 py-1 text-amber-300 font-bold text-2xl'>$10.00</h1>
                            <p className='ml-2.5 text-sm mb-3'>+$2 Delivery</p>
                        </div>
                        <div className='flex items-center bg-amber-300 text-black rounded-full px-3 py-1 w-40 justify-center'>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IceCream