import { useState } from 'react'

import Input from './assets/components/Input'
import History from './assets/components/History'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-400 h-screen overflow-hidden'>
    <div className='flex justify-center '>
    <div className=' w-7/12 mt-10'>
        <Input/>
        <History/>
    </div>
    </div>
    </div>
  )
}

export default App
