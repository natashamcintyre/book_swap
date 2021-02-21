import BookForm from '../components/bookForm'

describe('bookform', () => {
  it('renders without crashing', () => {
    const component = mount(<BookForm />)
    expect(component).toMatchSnapshot()
  })

  it('has input textbox for book title', () => {
    const component = mount(<BookForm />)
    expect(component.exists('input#title')).toBe(true)
  })

  it('has input textbox for book author', () => {
    const component = mount(<BookForm />)
    expect(component.exists('input#author')).toBe(true)
  })

  it('has input textbox for book ISBN', () => {
    const component = mount(<BookForm />)
    expect(component.exists('input#ISBN')).toBe(true)
  })

  it('has input textbox for postcode', () => {
    const component = mount(<BookForm />)
    expect(component.exists('input#postcode')).toBe(true)
  })

  it('has input textbox for phone number', () => {
    const component = mount(<BookForm />)
    expect(component.exists('input#phone_number')).toBe(true)
  })

  it('has submit button', () => {
    const component = mount(<BookForm />)
    expect(component.exists('button#submit')).toBe(true)
  })

  it('should update state title when text entered', () => {
    const component = shallow(<BookForm />)
    component.find('input#title').simulate('change', {
      target: { value: 'Test Title' }
    })
    expect(component.state('title')).toEqual('Test Title')
  })

  it('should update state author when text entered', () => {
    const component = shallow(<BookForm />)
    component.find('input#author').simulate('change', {
      target: { value: 'Test Author' }
    })
    expect(component.state('author')).toEqual('Test Author')
  })

  it('Clear message box on submit', () => {
    const component = mount(<BookForm submitBook={ function (item) { return true } }/>)
    component.find('input#title').simulate('change', {
      target: { value: 'Test Title' }
    })
    expect(component.state('title')).toEqual('Test Title')
    component.find('form').simulate('submit')

    expect(component.find('input#title').props().value).toEqual('')
    expect(component.state('title')).toEqual('')
  })
})
