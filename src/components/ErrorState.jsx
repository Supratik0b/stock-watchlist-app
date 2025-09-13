import React from 'react'
export default function ErrorState({onRetry, message='Something went wrong'}) {
  return (
    <div style={{padding:16, background:'#fff3f3', border:'1px solid #fcc', borderRadius:8}}>
      <div style={{marginBottom:8}}>{message}</div>
      <button onClick={onRetry}>Retry</button>
    </div>
  )
}
