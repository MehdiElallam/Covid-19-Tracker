import React from 'react';
import { configure, shallow } from 'enzyme';
import LineGraph from '../../components/LineGraph';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Rendring LineGraph component", () => {


    it('LineGraph should render correctly with no props', () => {
        
        const component = shallow(<LineGraph/>);
        expect(component).toMatchSnapshot();
    });

    it('LineGraph should render correctly with vaccination props equal to empty object', () => {
        
        const component = shallow(<LineGraph vaccination={{}} />);
        expect(component).toMatchSnapshot();
    });

});
  
  
// it('LineGraph should render correctly with given props', () => {
    
//     const component = shallow(<LineGraph title="Cases" number={110} />);
//     expect(component).toMatchSnapshot();
// });