import React, { useContext } from 'react';
import { HouseContext, MoneyContext } from '../Product';

const Cousin = () => {
          const money=useContext(MoneyContext)
          const [house,setHouse] =useContext(HouseContext)
          const increase =()=>{
                    setHouse(house +1)
          }
          return (
          <div className='border-2 border-yellow-500 p-4 rounded'>
                    <h1 className='text-3xl'>Cousin Component</h1> 
                   <h3 className='text-2xl'>Taka:{money}</h3>
                   <h3> Amar nam sajib:{house}</h3>  
                   <button className='btn btn-md bg-green-500 text-white' onClick={increase}>Click</button>    
           </div>
          );
};

export default Cousin;