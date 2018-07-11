import React from 'react';
import { shallow } from 'enzyme';
import { PearsonUsers } from '../../PearsonUsers';
import get  from '../../NetworkManager';

describe('Test Cases For PearsonUser', () => {
    const setup = () => shallow(<PearsonUsers />);
    const obj = [{
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
      id: 5,
      first_name: "Charles",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
      id: 6,
      first_name: "Tracey",
      last_name: "Ramos",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    }
  ];
  
  it('to be defined', () => {
    const wrapper = setup();
    expect(wrapper.instance()).toBeDefined();
  });

  it('simulates the click on Link', () => {
    const wrapper = setup();
    const e = {
      preventDefault: jest.fn(),
      target : { className : 'delBtn'}
    };
    wrapper.instance().checkTarget(e);
    expect(e.preventDefault.mock.calls.length).toBe(1);
  });
  
  it('removeduplicates object with values', () => {
    const wrapper = setup();  
    const res =  wrapper.instance().removeDuplicates(obj,'id');
    expect(typeof res).toBe('object');
    expect(res.length).toBe(3);
  });
  
  it('removeduplicates without value', () => {
    const wrapper = setup();
    const obj1 = [];
    const res =  wrapper.instance().removeDuplicates(obj1,'id');
    expect(res.length).toBe(0);
  });

  it('delete User with ID', () => {
    const wrapper = setup();
    wrapper.setState({users:obj});
    wrapper.instance().deleteUser('6'); 
    expect(wrapper.state().users.length).toBe(3);
  });

  it('Component Will Mount', () => {
    const wrapper = setup();
    wrapper.instance().componentWillMount(); 
    expect(get).toBeDefined();
  });
});

