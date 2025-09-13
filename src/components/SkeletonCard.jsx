import React from 'react'
export default function SkeletonCard(){
  return (
    <div className="card" aria-busy="true">
      <div style={{height:18, background:'#eee', marginBottom:12, borderRadius:6}}></div>
      <div style={{height:14, background:'#eee', width:'50%', borderRadius:6}}></div>
    </div>
  )
}
