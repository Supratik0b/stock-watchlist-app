import React from 'react'
import { timeAgo } from '../utils/formatters'

export default function StockCard({ stock, onClick, view = 'A', onToggle }) {
 
  const change = stock.percentageChange
  const sign = change >= 0 ? 'green' : 'red'

  return (
    <div className="card" onClick={onClick} role="listitem">
      <div className="badge" style={{ marginBottom: 10 }}>{stock.symbol}</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <div>
          <div><strong>Capital:</strong> ₹{stock.cmp}</div>
          <div className={sign} style={{ fontWeight: 700, marginTop: 6 }}>
            {change.toFixed(2)}%
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div><strong>Futures:</strong> ₹{stock.fut}</div>
          <div className="small" style={{ marginTop: 6 }}>
            {timeAgo(stock.updatedAt)}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggle && onToggle()
          }}
        >
          Toggle
        </button>
        <div className="small" style={{ fontStyle: 'italic' }}>View {view}</div>
      </div>
    </div>
  )
}

