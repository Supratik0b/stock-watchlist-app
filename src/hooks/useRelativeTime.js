import { useEffect, useState } from 'react'
import { timeAgo } from '../utils/formatters'
export default function useRelativeTime(timestamp){
  const [, setTick] = useState(0)
  useEffect(()=>{ const id = setInterval(()=> setTick(t=>t+1), 1000); return ()=>clearInterval(id)},[])
  return timeAgo(timestamp)
}
