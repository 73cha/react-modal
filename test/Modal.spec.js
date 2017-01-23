import assert from 'power-assert';
import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../src/components/Modal';


describe('<Modal />', () => {
  let props = {
    name: '',
    activeModalName: '',
    handler: function() {}
  };
  let wrapper;

  it ('renders one component', () => {
    wrapper = shallow(<Modal {...props} />);

    assert(wrapper.getNodes().length === 1);
  });

  it ('should have active class', () => {
    props = Object.assign({}, props, {
      name: 'modal1',
      activeModalName: 'modal1'
    });
    wrapper = shallow(<Modal {...props} />);

    assert(wrapper.hasClass('is-active') === true);
  });
});
