import React, { useContext } from 'react';
import Vabi from '../Vabi/Vabi';
import { HouseContext, MoneyContext } from '../Product';


const Brother = () => {
          const taka =useContext(MoneyContext)
          const house =useContext(HouseContext)
          return (
                    <div className='border-2 border-yellow-500 p-4 rounded'>
                              
                               <h1 className='text-3xl'>Brother Component</h1> 
                              <h3 className='text-2xl'>Taka:{taka}</h3>
                              <p>House:{house}</p>
                              <Vabi></Vabi>    
                    </div>
          );
};

export default Brother;