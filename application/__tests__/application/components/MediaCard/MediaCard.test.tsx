import React from 'react'
import MediaCard from '../../../../components/MediaCard/index'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

describe('<MediaCard />', () => {

    it('should render correctly', () => {
        const component = shallow(<MediaCard />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
