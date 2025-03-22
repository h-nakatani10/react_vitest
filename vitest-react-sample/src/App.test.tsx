import '@testing-library/jest-dom/vitest' // jestのアサーションがエラーになる場合は明示的にimport
import { describe, expect, test } from 'vitest'
import App from './App'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Simple working test', () => {

  test('should render correctly', () => {
    const {container} = render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  })

})