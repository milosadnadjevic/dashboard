import { TextInput } from '@tremor/react'
import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

function Navbar() {
  return (
    <div id='top' className='relative w-full sm:flex jultify-between items-center p-2'
    >
        <h1 className='font-bold text-gray-300'>Dashboard</h1>
        <div className='py-2'>
            <TextInput icon={SearchIcon} placeholder='Search...'/>
        </div>
    </div>
  )
}

export default Navbar