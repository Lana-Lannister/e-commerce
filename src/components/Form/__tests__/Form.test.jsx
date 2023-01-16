import React from 'react'
import { render, screen } from '@testing-library/react'
import Form from '../Form'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Form', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <Form />
      </Router>,
    )
    expect(screen.getByPlaceholderText('Type username')).toBeVisible()
    expect(screen.getByPlaceholderText('Type password')).toBeVisible()
    expect(screen.getByText('LOGIN')).toBeVisible()
  })
})
