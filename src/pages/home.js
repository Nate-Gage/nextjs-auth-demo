import React from 'react';
import axios from 'axios';
import RequireAuthentication from '../pages/authHOC';

const Home = (props) => {

    return (
        <div>
            Home Page
            <p>{props.greeting}</p>
        </div>
    );
};

Home.getInitialProps = async ctx => {

    // const res = await axios.get('http://localhost:3000/api/helloWorld', {
    //     headers: {
    //       authorization: 'Bearer ' + ctx.req.headers.cookie.replace('userToken=', '') //the token is a variable which holds the token
    //     }
    //    });

    return {
        //greeting: res.data.greeting,
        greeting: 'hello there'
    };
}

export default RequireAuthentication(Home);
