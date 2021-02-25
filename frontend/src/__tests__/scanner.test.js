import React from 'react'
import Scanner from '../components/barcode/scanner'
jest.mock('quagga')

describe('scanner', () => {
  it('renders without crashing', () => {
    const onDetectedMock = jest.fn()
    const component = shallow(<Scanner onDetected={onDetectedMock} />)
    expect(component).toMatchSnapshot()
    // expect(onDetectedMock.mock.calls.length).toBe(1)
  })
})
