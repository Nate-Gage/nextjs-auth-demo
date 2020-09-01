import React from 'react';
import { findByTestAttr } from '../../utils/testFuncs';
import { shallow } from 'enzyme';
import SignIn from '../../pages/index';
import loginUser from '../../utils/loginUser';

const setUp = (props = {}) => {
    const component = shallow(<SignIn {...props} />);
    return component;
};

describe("Sign in user", () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    test('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'signinComponent');
        expect(wrapper.length).toBe(1);
    });
});