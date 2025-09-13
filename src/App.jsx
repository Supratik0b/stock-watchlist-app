import React from 'react'
import Watchlist from './pages/Watchlist'

export default function App(){
  return (
    <div>
      <header style={{padding:20, borderBottom:'1px solid #eee', background:'#fff'}}>
        <h1 style={{margin:0}}>Stock Watchlist App</h1>
      </header>
      <main style={{padding:20}}>
        <Watchlist />
      </main>
    </div>
  )
}
