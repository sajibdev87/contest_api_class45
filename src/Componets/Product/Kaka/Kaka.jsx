import React from 'react';

const Kaka = ({money}) => {
          return (
                    <div className='border-2 border-yellow-500 p-4 rounded'>
                          
                              <h1 className='text-3xl'>Kaka Component</h1> 
                              <h3 className='text-2xl'>Taka:{money}</h3>     
                          
                    </div>
          );
};

export default Kaka;