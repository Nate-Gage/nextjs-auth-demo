import React from 'react';
import axios from 'axios';
import RequireAuthentication from '../pages/authHOC';
import authReqHeader from '../utils/authReqHeader';
import auth from '../middleware/auth';

const Home = (props) => {

    return (
        <div>
            Home Page
            <p>{props.greeting}</p>
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

export default RequireAuthentication(Home);
