import React from 'react'
import { useHistory } from '../../hooks/historyHook'
import { MdFileCopy } from 'react-icons/md'


interface HistoryItem{
  _id:string,
  full_Url:string,
  short_url:string
}
const History:React.FC = () => {
  const {data}=useHistory()
  console.log(data)
  const handleCopyClick = async (shortUrl: string) => {
    try {
      const url='http://localhost:3001/api/'+shortUrl
      await navigator.clipboard.writeText(url)
      alert('Short URL copied to clipboard!')
    } catch (error) {
      console.error('Failed to copy the URL', error)
    }
  }

  return (
    <div>
      <table className='w-full mt-10 border-black border-2 overscroll-auto'>
        <tr className='bg-gray-700 w-full text-white'>
        <th className='p-5'>Full Url</th>
        <th>Short Url</th>
        {/* <th></th> */}
        </tr>
        <tbody>
        {data?.map((i:HistoryItem)=>(
          <tr key={i._id} className='w-full border border-black'>
           <td className='px-10 w-8/12 p-3'>{i.full_Url.slice(0,50)}</td>
           <td className='flex justify-center items-center mt-2'>
                <MdFileCopy size={25}
                  className='cursor-pointer' 
                  onClick={() => handleCopyClick(i.short_url)} 
                />
              </td>
         </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default History