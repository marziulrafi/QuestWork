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
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
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
