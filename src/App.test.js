import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factor function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to the setup.
 * @param {object} state - Initial state for the set up
 * @returns {ShallowWrapper}
*/

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props}/>)
  if (state) wrapper.setState(state)
  return wrapper
}

/**
 * Returns ShaallowWrapper containing node(s) with the given data-test.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper
 * @param {String} val
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders header', () => {
  const wrapper = setup()
  const headerComponent = findByTestAttr(wrapper, 'header-app')
  expect(headerComponent.length).toBe(1)
})

test('renders footer', () => {
  const wrapper = setup()
  const footerComponent = findByTestAttr(wrapper, 'footer-app')
  expect(footerComponent.length).toBe(1)
})
