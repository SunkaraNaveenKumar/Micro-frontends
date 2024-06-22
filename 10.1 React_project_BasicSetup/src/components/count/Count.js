import React, { useState } from 'react'

const Count = () => {
    const [count,setCount] = useState(0)
  return (
    <div className='flex flex-col gap-2
    ' >
    <div>{count}</div>
    <button onClick={()=>{setCount(count+1)}}>
Click
    </button>
    </div>
  )
}

export default Count