import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorState from '../components/ErrorState'

test('error state shows retry', ()=>{
  const fn = jest.fn()
  render(<ErrorState onRetry={fn} message="err" />)
  expect(screen.getByText('err')).toBeInTheDocument()
})
