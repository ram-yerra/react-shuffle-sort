import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

import App from '../App';
import "./App.scss";

describe('<App />', () => {
  
  it('check if App matches Snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("loads numbers", () => {
   const wrapper = shallow(<App />);
   expect(wrapper.find(".card").length).toEqual(9);
 });

  it('check if App shuffles numbers', () => {
    const wrapper = shallow(<App />);
    wrapper.find('.shuffle').simulate("click");
    expect(wrapper.find(".numbers-container").text()).not.toContain('123456789');
  });

  it('check if App sorts numbers', () => {
    const wrapper = shallow(<App />);
    wrapper.find('.sort').simulate("click");
    expect(wrapper.find(".card-0").text()).toContain('1');
  });
  
});