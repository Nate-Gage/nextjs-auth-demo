import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    useEffect(() => {
        axios.get('http://localhost:3000/api/cookieCheck')
        .then(res => console.log(res.data));
    }, [])

    return (
        <div>
            Home Page
        </div>
    );
};

export default Home;
