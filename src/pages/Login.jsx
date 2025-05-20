import React, { useRef, useState, use } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { login, googleLogin, } = use(AuthContext);
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage('');

        login(email, password)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage(error.message);
            });
    };


    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-12 mb-12 shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center mt-3 font-bold">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name="email" ref={emailRef} placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name="password" placeholder="Password" />
                    <div>
                        <Link className="link link-hover">
                            Forgot password?
                        </Link>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>

                <div className="divider">OR</div>

                <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                    Login with Google
                </button>

                <p className="mt-5">
                    New to this site? <Link className="underline text-blue-600" to="/register">Register Here</Link>
                </p>
            </div>

            {errorMessage && <p className="text-red-600 font-bold p-5">{errorMessage}</p>}
        </div>
    );
};

export default Login;
""
