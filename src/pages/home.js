import React from 'react';
import axios from 'axios';
import RequireAuthentication from '../pages/authHOC';
import authReqHeader from '../utils/authReqHeader';
import PropTypes from 'prop-types';

const Home = (props) => {

    const { greeting } = props;

    return (
        <div>
            Home Page
            <p>{greeting}</p>
        </div>
    );
};

// the RequireaAuthentication HOC processes before Home component's
// getInitialProps runs
Home.getInitialProps = async ctx => {
    const res = await axios.get('http://localhost:3000/api/helloUser', authReqHeader(ctx));

    return {
        greeting: res.data.greeting,
    };
}

Home.propTypes = {
    greeting: PropTypes.string
};

Home.PropTypes = {

}

export default RequireAuthentication(Home);