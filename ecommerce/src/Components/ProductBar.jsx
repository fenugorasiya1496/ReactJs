import React, { useEffect, useState } from 'react'
import ProductCard from '../ui/ProductCard'
import axios from "axios"
import { Link } from 'react-router-dom';


const ProductBar = () => {

    const [Product, setProduct] = useState([]);

    useEffect(() => {
        let FetchProducts = async () => {
            try {
                let response = await axios.get("https://dummyjson.com/products",);
                console.log(response.data.products);
                setProduct(response.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        FetchProducts();
    }, []);
    return (         
        
        <>
            <section className='p-6 flex items-center justify-center flex-col px-24'>

                <div className='w-full'>
                    <h3 className='text-xl md:text-xl text-gray-400 font-semibold max-md:text-center   '>Our Products</h3>
                    <div>
                        <h1 className='text-5xl font-semibold'>Our Top Seller Product</h1>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='px-3 py-1 border bg-[#583101] font-medium text-md inline-block'>All</div>
                            <div className='px-3 py-1 border text-[#583101] font-medium text-md inline-block'>Women</div>
                            <div className='px-3 py-1 border text-[#583101] font-medium text-md inline-block'>Man</div>
                            <div className='px-3 py-1 border text-[#583101] font-medium text-md inline-block'>Accessories</div>
                        </div>
                    </div>
                </div>
                {/* Product cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full'>

                    {Product.map((data) => {
                        return (
                            <Link to={`/product/${data.id}`} key={data.id} >
                                <ProductCard product_data={data} /> </Link>
                        );
                    })}

                </div>
            </section>
        </>
    )
}

export default ProductBar