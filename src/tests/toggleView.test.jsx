import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import StockCard from '../components/StockCard'

test('toggle switches view', ()=>{
  const stock = {symbol:'AAA', cmp:100, fut:98, prevClose:95, updatedAt: Date.now()}
  let view='A'
  const onToggle = ()=> view = view === 'A' ? 'B' : 'A'
  render(<StockCard stock={stock} onClick={()=>{}} onToggle={onToggle} view={view} />)
  const btn = screen.getByText('Toggle')
  fireEvent.click(btn)
  expect(btn).toBeInTheDocument()
})
