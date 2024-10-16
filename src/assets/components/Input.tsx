import React, { useState } from 'react'
import { useUrlCreate } from '../../hooks/historyHook'




const Input = () => {
    const [full_Url,setFull_Url]=useState<string>("")
    const mutation=useUrlCreate()
const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    mutation.mutate({full_Url})

}
  return (
    <div>
        <h1 className='text-4xl text-center font-semibold font-sans py-2'>URL SHORTER</h1>
    <div className=' p-3'>
        <form action="" onSubmit={handleSubmit}>
            <div className='flex gap-2'>
            <input onChange={(e)=>setFull_Url(e.target.value)} type="text" placeholder='Enter Url' className='p-3 rounded-xl w-full p-2 px-5 text-center font-semibold focus:border-none focus:outline-none ' />
            <button type='submit' className='bg-green-500 rounded-md py-2  px-4'>Submit</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Input