import React from 'react';
import Brother from '../Brother/Brother';

const Father = () => {
          return (
                    <div className='border-2 border-yellow-500 p-4 rounded'>

                              <h1 className='text-3xl'>Father Component</h1> 
                              <h3 className='text-2xl'>Taka:</h3>  
                              <Brother></Brother>    
                    </div>
          );
};

export default Father;