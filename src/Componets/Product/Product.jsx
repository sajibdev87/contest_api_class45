import React, { createContext, useState } from 'react';
import Father from './Father/Father';
import Kaka from './Kaka/Kaka';
import Unti from './Unti/Unti';

const money =4400;

 export const MoneyContext=createContext(5000);
 export const HouseContext =createContext();


  
const Product = () => {
    const [house,setHouse]=useState(55);
    
          return (
                    <div className='border-2 border-yellow-500 p-4 my-8  rounded py-20 bg-base-100 container mx-auto'>
                        <div className='text-center mb-8'>
                            <h1 className='text-3xl'>Dadu Component</h1> 
                            <h3 className='text-2xl'>Taka:{money}</h3>
                        </div>
                            <div className='flex justify-around'>
                             <HouseContext.Provider value={[house,setHouse]}>
                             <MoneyContext.Provider value={money}>
                                         <Father></Father>
                                         <Kaka money={money}></Kaka>
                                         <Unti></Unti>
                                 </MoneyContext.Provider>
                             </HouseContext.Provider>
                            </div>
                    </div>
          );
};

export default Product;