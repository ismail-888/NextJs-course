'use client'

import { useState } from "react"

const ClientComponent = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button type="button" onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default ClientComponent