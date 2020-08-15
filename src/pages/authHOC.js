import React from 'react';
const jwt = require('jsonwebtoken');

const RequireAuthentication = (WrappedComponent) => {

    return class extends React.Component {

        static getInitialProps(ctx) {

            let isAuthenticated;

            const token = ctx.req.headers.cookie?.replace('userToken=', '');
            try {
                isAuthenticated = jwt.verify(token, process.env.JWT_KEY);
            } catch (e) {
                console.log(e);
            }

            if (isAuthenticated?.user) {
                return WrappedComponent.getInitialProps(ctx);
            } else {
                ctx.res.redirect('/')
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default RequireAuthentication;



