import React from 'react'
export default function SortMenu({value,onChange}) {
  return (
    <select value={value} onChange={e=>onChange(e.target.value)}>
      <option value="">Sort by</option>
      <option value="pct_desc">Percentage % (desc)</option>
      <option value="pct_asc">Percentage % (asc)</option>
      <option value="cmp_desc">CMP (desc)</option>
      <option value="cmp_asc">CMP (asc)</option>
      <option value="fut_desc">Futures (desc)</option>
      <option value="fut_asc">Futures (asc)</option>
    </select>
  )
}
