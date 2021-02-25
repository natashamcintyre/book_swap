import React from 'react'
import BarcodeScanner from '../components/barcode/barcodeScanner'

describe('barcodeScanner', () => {
  it('renders without crashing', () => {
    const component = mount(<BarcodeScanner changeIsbnValue={true} />)
    expect(component).toMatchSnapshot()
  })

  it('button changes text on click', async () => {
    const component = shallow(<BarcodeScanner changeIsbnValue={true} />)
    component.find('button').simulate('click')
    await component.update()
    expect(component.find('button').text()).toEqual(' Stop Scan')
  })
})
