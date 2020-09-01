import React from 'react';
import loginUser from '../loginUser';

describe("Login User function", () => {

    test("Login user should return 200 if successful POST", () => {

        const user = {
            email: 'test@mail.com',
            password: 'testpass'
        };

        const response = loginUser(user);
        expect(response.status).toBe(200);
    });
})