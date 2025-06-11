import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState('olive');


  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2 '>
        <div className='flex flex-wrap justify-center gap-3 py-3 px-3 m-2 bg-white rounded-4xl'>
          <button onClick ={() => setColor('Red')}
           className='outline-none rounded-2xl px-4 py-1 cursor-pointer 
        text-white bg-red-500'>Red</button>

         <button 
         onClick ={() => setColor('yellow')}
         
         className='outline-none rounded-2xl px-4 py-1 cursor-pointer 
        text-white bg-yellow-500'>yellow</button>

         <button onClick ={() => setColor('blue')}
         
         className='outline-none rounded-2xl px-4 py-1 cursor-pointer 
        text-white bg-blue-500'>Blue</button>


         <button onClick ={() => setColor('green')}
        
         className='outline-none rounded-2xl px-4 py-1 cursor-pointer 
        text-white bg-green-500'>Green</button>

         <button onClick ={() => setColor('black')}
     
         className='outline-none rounded-2xl px-4 py-1 cursor-pointer 
        text-white bg-black'>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
