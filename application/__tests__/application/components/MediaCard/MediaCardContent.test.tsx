import React from 'react'
import MediaCardContent from '../../../../components/MediaCard/MediaCardContent'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

describe('<MediaCardContent />', () => {

    it('should render correctly', () => {
        const component = shallow(
            <MediaCardContent content="Some cool content" slug='Slug' className="style" truncateContentLength={20} onClick={void (0)} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should apply the CSS class to the component', () => {
        const component = shallow(
            <MediaCardContent content="Some cool content" slug='Slug' className="style" />);

        expect(component.contains(
            <div className="style">
                <span className="text-gray-800 dark:text-grayDark-800 mb-1 block">
                    Slug
                </span>
                <span className="text-gray-700 dark:text-grayDark-700">
                    Some cool content
                </span>
            </div>)
        ).toEqual(true);
    });

    it('should truncate the content when "truncateContentLength" property is specified', () => {
        const component = shallow(
            <MediaCardContent content="Some cool contentSlug" slug='Slug' className="style" truncateContentLength={4} />);

        expect(component.text()).toBe('SlugSome');
    });

    it('should trigger on click event when "onClick" property is specified', () => {
        const onButtonClick = jest.fn();
        const component = shallow(
            <MediaCardContent content="Some cool contentSlug" slug='Slug' className="style" onClick={onButtonClick} />);

        component.find('div').simulate('click');
        expect(onButtonClick).toBeCalledTimes(1);
    });
});
