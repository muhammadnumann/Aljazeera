import React from 'react'
import AppContext from '../../../../utils/contexts/AppContext'
import MediaCardThumbnail from '../../../../components/MediaCard/MediaCardThumbnail'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { DUMMY_USERNAME, DUMMY_SERVER_URL, DUMMY_TOKEN } from '../../../helpers/fixture.helper'

describe('<MediaCardThumbnail />', () => {

    it('should render correctly', () => {

        const component = shallow(
        <AppContext.Provider value={{ username: DUMMY_USERNAME, serverUrl: DUMMY_SERVER_URL, token: DUMMY_TOKEN }}>;
            <MediaCardThumbnail thumbnail='/path/to/img.jpg' itemId='VX-1' />);
        </AppContext.Provider>);
            
        expect(toJson(component)).toMatchSnapshot();
    });
});
