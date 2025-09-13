import React from 'react'
import { render, screen } from '@testing-library/react'
import StockCard from '../components/StockCard'

test('renders stock card fields', () => {
  const stock = { symbol: 'AAA', cmp: 100, fut: 98, prevClose: 95, updatedAt: Date.now() }
  render(<StockCard stock={stock} onClick={() => {}} onToggle={() => {}} />)
  expect(screen.getByText('AAA')).toBeInTheDocument()
  expect(screen.getByText('₹100')).toBeInTheDocument()
  expect(screen.getByText(/%/)).toBeInTheDocument()
})
