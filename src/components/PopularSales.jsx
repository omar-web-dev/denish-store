import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Item from './utils/Item'
import Title from './utils/Title' 

const PopularSales = ({ ifExists, endpoint: { title, items } }) => {
  // console.log(endpoint)
  let [products, setProducts] = useState([])

  useEffect( () =>{
    fetch('http://localhost:5000/popular-sales')
    .then(res =>res.json())
    .then(data => setProducts(data))
}, []);


  return (
   <>
      <div className='nike-container'>
        <Title title={title} />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
          {products?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
   </>
  )
}

export default PopularSales