'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  
  return (
    <div>
      <h1></h1>
      <p>Query: {JSON.stringify(router.push)}</p>
    </div>
  )
}