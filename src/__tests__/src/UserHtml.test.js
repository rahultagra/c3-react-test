import React from 'react';
import { shallow } from 'enzyme';
import UsersDetail  from '../../UserHtml';


describe('Test Cases For UserHtml', () => {
    const obj = [{
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
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg",
        hasOwnProperty: jest.fn().mockReturnValue(true)
    }
  ];
  
  it('UsersDetail Html', () => {
    const props = {user: obj};
    const wrapper = UsersDetail(props); 
    expect(typeof wrapper).toBe('object');
  });
});

