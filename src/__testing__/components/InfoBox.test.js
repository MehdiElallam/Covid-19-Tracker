import React from 'react';
import { shallow } from 'enzyme';
import InfoBox from '../../components/InfoBox';


describe("Rendring InfoBox component", () => {
    
    it('InfoBox should render correctly with no props', () => {
        
        const component = shallow(<InfoBox/>);
        expect(component).toMatchSnapshot();
    });
    
    
    it('InfoBox should render correctly with props', () => {
        
        const component = shallow(<InfoBox title="Cases" number={110} />);
        expect(component).toMatchSnapshot();
    });

});