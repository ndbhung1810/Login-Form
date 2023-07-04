import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";

import axios from './api/axios';
const url = 'https://batch-293-0-nodejs.onrender.com/admin/employees/login';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const onSubmit = (database) => {
        const data = {
          username: 'nv01@gmail.com',
          password: '123456',
        };
      
        const url = 'https://batch-293-0-nodejs.onrender.com/admin/employees/login';
      
        // Promise
        axios
          .post(url, data)
          .then((result) => {
            console.log(result.data);
            console.log('Login thành công');
          })
          .catch((err) => {
            console.error(err);
            console.log('Login thất bại');
          });
      };

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(database) => setUser(database.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(database) => setPwd(database.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login
