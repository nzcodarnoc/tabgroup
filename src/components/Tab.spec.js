import React from 'react';
import { shallow } from 'enzyme';
import Tab from "./Tab"
describe('The Tab Component', () => {
   it('renders without crashing', () => {
      shallow(<Tab />);
    });
});
