import React from 'react'
import Scanner from '../components/barcode/scanner'

describe('scanner', () => {
  xit('renders without crashing', () => {
    jest.mock('./Quagga', () => () => true)
    const component = shallow(<Scanner changeIsbnValue={true} />)
    expect(component).toMatchSnapshot()
  })
})
