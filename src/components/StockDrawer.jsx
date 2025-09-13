import React, { useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { timeAgo, pctChange } from '../utils/formatters'

export default function StockDrawer({ stock, onClose }) {
  if (!stock) return <div style={{padding:20}}>No data available</div>

  // generate 30-point series based on cmp
  const series = useMemo(()=>{
    const base = stock.cmp
    return Array.from({length:30}).map((_,i)=>({i, value: +(base + Math.sin(i/3)* (base*0.01) + (i-15)*0.2).toFixed(2)}))
  },[stock.cmp])

  const change = pctChange(stock.cmp, stock.prevClose)
  const sign = change >= 0 ? 'green' : 'red'

  return (
    <div className="drawer" role="dialog" aria-label={`Details for ${stock.symbol}`}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2 style={{margin:0}}>{stock.symbol}</h2>
        <button onClick={onClose} style={{background:'#06b6d4', color:'#fff', borderRadius:6, padding:'6px 10px'}}>Close</button>
      </div>

      <div style={{marginTop:12}} className="chart-wrapper">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={series}>
            <XAxis dataKey="i" hide />
            <YAxis domain={['dataMin','dataMax']} width={40} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#0284c7" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{marginTop:14}}>
        <div style={{fontWeight:700}}>Capital Price: <span style={{fontWeight:500}}>₹ {stock.cmp}</span></div>
        <div style={{fontWeight:700, marginTop:8}}>Futures Price: <span style={{fontWeight:500}}>₹ {stock.fut}</span></div>
        <div style={{fontWeight:700, marginTop:8}}>Previous Close: <span style={{fontWeight:500}}>₹ {stock.prevClose}</span></div>
        <div style={{fontWeight:700, marginTop:8}}>Last updated: <span style={{fontWeight:500}}>{timeAgo(stock.updatedAt)}</span></div>
      </div>
    </div>
  )
}
