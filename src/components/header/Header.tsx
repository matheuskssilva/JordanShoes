import React from 'react'

export const Header = () => {
  return (
    <header className='w-full'>
        <div className='bg-bluebg flex items-center justify-center h-14'>
        <h2 className='text-base font-medium text-black'>Ganhe R$ 10,00 de desconto no frete</h2>
        </div>
        <div className='flex justify-center mt-2 mb-2 md:mt-4 md:mb-4'>
            <h1 className='text-1xl md:text-2xl'>JordanShoes</h1>
        </div>
    </header>
  )
}
