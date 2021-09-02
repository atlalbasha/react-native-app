import React from 'react'
import { render } from '@testing-library/react-native'

import renderer from 'react-test-renderer'

import Search from '../component/Search'

describe(
  'Search',
  () => {
    it('value', () => {
      const { queryByText } = render(<Search />)
      expect(queryByText).not.toBeNull()
    })
  },

  it('renders correctly', () => {
    renderer.create(<Search />)
  }),

  it('search', () => {
    const { getByTestId } = render(<Search />)
    const input = getByTestId('search')
    expect(input).toBeTruthy()
  }),
  it('btn', () => {
    const { getByTestId } = render(<Search />)
    const btn = getByTestId('btn')
    expect(btn).toBeTruthy()
  }),
  it('fontIcon', () => {
    const { getByTestId } = render(<Search />)
    const font = getByTestId('fontIcon')
    expect(font).toBeTruthy()
  })
)
