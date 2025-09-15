import React, {useEffect, useMemo, useState} from 'react'
import StockCard from '../components/StockCard'
import StockDrawer from '../components/StockDrawer'
import ErrorState from '../components/ErrorState'
import SearchBar from '../components/SearchBar'
import SortMenu from '../components/SortMenu'
import SkeletonCard from '../components/SkeletonCard'
import { fetchDummyData } from '../api/fetchDummyData'

export default function Watchlist(){
  const [stocks, setStocks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('')
  const [viewMap, setViewMap] = useState({})
  const [selectedStock, setSelectedStock] = useState(null)

  const load = async ({simulateError=false}={})=>{
    setIsLoading(true); setError(null)
    try{
      const d = await fetchDummyData({simulateError})
      setStocks(d)
    }catch(e){
      setError(e.message)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(()=>{ load({simulateError:true}) },[])

  const refresh = ()=> load({simulateError:true})

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase()
    let arr = stocks.slice()
    if(q) arr = arr.filter(s=>s.symbol.toLowerCase().includes(q))
    if(sort){
      const [key,dir] = sort.split('_')
      arr.sort((a,b)=>{
        let va=0,vb=0
        if(key==='pct'){ 
          va = a.percentageChange ?? 0
          vb = b.percentageChange ?? 0
        }
        if(key==='cmp'){ va = a.cmp; vb = b.cmp }
        if(key==='fut'){ va = a.fut; vb = b.fut }
        return (va - vb) * (dir==='desc' ? -1 : 1)
      })
    }
    return arr
  },[stocks,query,sort])

  if(isLoading){
    return <div className="grid">{Array.from({length:12}).map((_,i)=><SkeletonCard key={i} />)}</div>
  }
  if(error){
    return <ErrorState message={error} onRetry={()=>load({simulateError:false})} />
  }

  return (
    <div>
      <div className="controls">
        <SearchBar value={query} onChange={setQuery} />
        <SortMenu value={sort} onChange={setSort} />
        <button onClick={refresh}>Refresh</button>
      </div>

      <div className="grid" role="list">
        {filtered.map(s=>(
          <StockCard
            key={s.symbol}
            stock={s}
            view={viewMap[s.symbol] || 'A'}
            onToggle={()=> setViewMap(m=>({...m, [s.symbol]: m[s.symbol] === 'A' ? 'B':'A'}))}
            onClick={()=> setSelectedStock(s)}
          />
        ))}
      </div>

      {selectedStock && <StockDrawer stock={selectedStock} onClose={()=>setSelectedStock(null)} />}
    </div>
  )
}
