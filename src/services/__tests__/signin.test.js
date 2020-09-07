import React from 'react';
import { findByTestAttr } from '../testFuncs';
import { shallow } from 'enzyme';
import SignIn from '../../pages/index';
const signIn = require('../../api/signin');

const setUp = (props = {}) => {
    const component = shallow(<SignIn {...props} />);
    return component;
};

describe("Sign In Component", () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    test('SignIn component should render without errors', () => {
        const wrapper = findByTestAttr(component, 'signinComponent');
        expect(wrapper.length).toBe(1);
    });

    test('signIn.js function returns user object', () => {

        const res = signIn();
        expect(res.status).toBe(200);
    });
});