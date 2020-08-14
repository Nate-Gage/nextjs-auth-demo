import React from 'react';
const jwt = require('jsonwebtoken');

const RequireAuthentication = (WrappedComponent) => {

    return class extends React.Component {

        static getInitialProps(ctx) {

            let isAuthenticated;

            if (ctx.req.headers.cookie) {
                const token = ctx.req.headers.cookie.replace('userToken=', '');
                decoded = jwt.verify(token, process.env.JWT_KEY);
            }

            if (isAuthenticated) {
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



