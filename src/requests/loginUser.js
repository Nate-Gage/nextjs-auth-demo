import axios from 'axios';

const loginUser = (user) => {
    axios.get('http://localhost:3000/api/signin')
        .then(res => {
            if (res.status === 200) {
                //window.location = '/home';
                return res.status(200).send({ user: { email: 'test@mail.com', password: 'testpass' } });
            } else {
                setErrMsg(res.data.error);
            }
        })
        .catch(err => {
            setErrMsg(err.response.data.error)
        })
};

export default loginUser;