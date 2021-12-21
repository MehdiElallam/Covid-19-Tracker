import React from 'react';
import { configure, shallow } from 'enzyme';
import InfoBox from '../InfoBox';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


it('InfoBox should render correctly with no props', () => {
    
    const component = shallow(<InfoBox/>);
    expect(component).toMatchSnapshot();
});
  
  
it('InfoBox should render correctly with given props', () => {
    
    const component = shallow(<InfoBox title="Cases" number={110} />);
    expect(component).toMatchSnapshot();
});