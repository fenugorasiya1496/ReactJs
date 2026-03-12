import React from 'react'
import Card from './Components/Card';
import ProductCard from './Components/ProductCard';

const App = () => {
//   const data = [
//   {
//     "photo": "https://i.pinimg.com/736x/f3/54/bf/f354bffdac18d003ab46c0282155cc52.jpg",
//     "juice_name": "Orange Juice",
//     "ingredients": ["Fresh Oranges", "Sugar", "Ice", "Water"],
//     "price": 80
//   },
//   {
//     "photo": "https://i.pinimg.com/736x/52/5d/0b/525d0b62ea336101d4abb424690eeb94.jpg",
//     "juice_name": "Mango Juice",
//     "ingredients": ["Mango Pulp", "Milk", "Sugar", "Ice"],
//     "price": 100
//   },
//   {
//     "photo": "https://i.pinimg.com/736x/6c/96/57/6c96576bd8037d11c17aff26508323db.jpg",
//     "juice_name": "Apple Juice",
//     "ingredients": ["Fresh Apples", "Water", "Sugar", "Ice"],
//     "price": 90
//   },
//   {
//     "photo": "https://i.pinimg.com/736x/7a/97/fd/7a97fd291c2416dff6aa29e55088bc2c.jpg",
//     "juice_name": "Pineapple Juice",
//     "ingredients": ["Pineapple", "Sugar Syrup", "Ice"],
//     "price": 85
//   },
//   {
//     "photo": "https://i.pinimg.com/1200x/bb/9f/e3/bb9fe38e7ef6c818e93e07eebc608b1b.jpg",
//     "juice_name": "Watermelon Juice",
//     "ingredients": ["Watermelon", "Mint Leaves", "Ice"],
//     "price": 70
//   },
//   {
//     "photo": "https://i.pinimg.com/736x/33/69/fd/3369fdeb3a69cdbab63a66fea8895735.jpg",
//     "juice_name": "Strawberry Juice",
//     "ingredients": ["Strawberries", "Sugar", "Milk", "Ice"],
//     "price": 110
//   },
//   {
//     "photo": "https://i.pinimg.com/1200x/47/90/29/4790299b878bba4ec7eedf07e3b2d2e8.jpg",
//     "juice_name": "Grape Juice",
//     "ingredients": ["Black Grapes", "Sugar", "Water"],
//     "price": 95
//   },
//   {
//     "photo": "https://i.pinimg.com/736x/26/7a/6b/267a6b1d971d8b2318eb0dac0616293b.jpg",
//     "juice_name": "Pomegranate Juice",
//     "ingredients": ["Pomegranate Seeds", "Water", "Ice"],
//     "price": 120
//   },
//   {
//     "photo": "https://i.pinimg.com/736x/6c/f1/4b/6cf14b3974e5702c3ed980e8360a9bb8.jpg",
//     "juice_name": "Kiwi Juice",
//     "ingredients": ["Kiwi", "Honey", "Ice"],
//     "price": 130
//   },
//   {
//     "photo": "https://i.pinimg.com/1200x/07/64/a6/0764a653192a11d809a6f7849bf28e84.jpg",
//     "juice_name": "Mixed Fruit Juice",
//     "ingredients": ["Apple", "Banana", "Mango", "Orange", "Sugar"],
//     "price": 140
//   }
// ]

const product = [
  {
    "id": 1,
    "photo": "https://i.pinimg.com/736x/4e/a5/c8/4ea5c8c480625906a692bafa65ba7aad.jpg",
    "product_name": "Wireless Headphones",
    "price": "$59.99",
    "tagline": "Feel the music without limits",
    "details": "High quality wireless headphones with noise cancellation and 20 hours battery life."
  },
  {
    "id": 2,
    "photo": "https://i.pinimg.com/1200x/7b/8f/c2/7b8fc2879d842503cac1de15f9a1baf6.jpg",
    "product_name": "Smart Watch",
    "price": "$89.99",
    "tagline": "Your health on your wrist",
    "details": "Track fitness, heart rate, and notifications with this stylish smart watch."
  },
  {
    "id": 3,
    "photo": "https://i.pinimg.com/736x/64/14/99/64149999d340b2b1ee0b7e802c936f29.jpg",
    "product_name": "Bluetooth Speaker",
    "price": "$39.99",
    "tagline": "Powerful sound anywhere",
    "details": "Portable speaker with deep bass, waterproof design, and 12 hours playback."
  },
  {
    "id": 4,
    "photo": "https://i.pinimg.com/736x/2c/be/91/2cbe91cdfc5e91dd99e5abefb2303324.jpg",
    "product_name": "Gaming Mouse",
    "price": "$29.99",
    "tagline": "Precision for gamers",
    "details": "Ergonomic gaming mouse with RGB lighting and adjustable DPI settings."
  },
  {
    "id": 5,
    "photo": "https://i.pinimg.com/736x/81/ee/c0/81eec011a9ae7951411e0998be66d787.jpg",
    "product_name": "Mechanical Keyboard",
    "price": "$79.99",
    "tagline": "Type like a pro",
    "details": "Durable mechanical keyboard with backlit keys and fast response switches."
  },
  {
    "id": 6,
    "photo": "https://i.pinimg.com/1200x/e3/5d/86/e35d8684a57949d6528f6850241be694.jpg",
    "product_name": "Laptop Stand",
    "price": "$24.99",
    "tagline": "Work comfortably anywhere",
    "details": "Adjustable aluminum laptop stand designed for better posture and cooling."
  },
  {
    "id": 7,
    "photo": "https://i.pinimg.com/1200x/4f/d8/58/4fd858a37dcf69b3934c6d09602f1d61.jpg",
    "product_name": "Wireless Charger",
    "price": "$19.99",
    "tagline": "Charge without cables",
    "details": "Fast wireless charging pad compatible with all Qi-enabled smartphones."
  },
  {
    "id": 8,
    "photo": "https://i.pinimg.com/1200x/e2/2c/81/e22c81b5eed5e3e4cfaf01622284b33e.jpg",
    "product_name": "HD Webcam",
    "price": "$49.99",
    "tagline": "Crystal clear video calls",
    "details": "1080p webcam with built-in microphone ideal for meetings and streaming."
  },
  {
    "id": 9,
    "photo": "https://i.pinimg.com/1200x/d5/d6/10/d5d6101ade71d95ae14a3bafa3489d3f.jpg",
    "product_name": "Portable SSD",
    "price": "$99.99",
    "tagline": "Speed meets portability",
    "details": "Ultra-fast external SSD with 1TB storage and compact design."
  },
  {
    "id": 10,
    "photo": "https://i.pinimg.com/736x/8c/ec/cb/8ceccb694c6e77a102d12c808a887479.jpg",
    "product_name": "LED Desk Lamp",
    "price": "$34.99",
    "tagline": "Light up your workspace",
    "details": "Energy-efficient LED desk lamp with touch control and adjustable brightness."
  }
]


  return (
    <>
      {/* <section className='flex flex-wrap gap-6 px-8 py-4 justify-center items-center'>
        {data.map(function (juice) {
          return <Card data={juice} />
        })}
      </section> */}

        <section className='flex items-center flex-wrap py-4 px-6 gap-15'>
        {product.map(function(data){
          return <ProductCard data = {data}/>
        })}
        </section>
    </>
  )
}

export default App