import React, { useState, use } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, googleLogin } = use(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return setErrorMessage(
                'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.'
            );
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        setUser({
                            ...user,
                            displayName: name,
                            photoURL: photo,
                        });
                        navigate(from, { replace: true });
                    })
                    .catch((error) => {
                        console.log(error.message);
                        setErrorMessage(error.message);
                    });
            })
            .catch((error) => {
                console.log(error.message);
                setErrorMessage(error.message);
            });
    };

    const handleGoogleRegister = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                setErrorMessage(error.message);
            });
    };

    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 mb-10 shrink-0 shadow-xl">
            <h1 className="text-3xl text-center mt-3 font-bold">Register Here</h1>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" name="name" placeholder="Enter Name" required />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" name="photo" placeholder="Enter Photo URL" required />
                    <label className="label">Email</label>
                    <input type="email" className="input" name="email" placeholder="Enter Email" required />
                    <label className="label">Password</label>
                    <input type="password" className="input" name="password" placeholder="Password" required />
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>

                <div className="divider">OR</div>

                <button onClick={handleGoogleRegister} className="btn bg-white text-black border-[#e5e5e5]">
                    Register with Google
                </button>

                <p className="mt-5">
                    Already have an account? <Link className="underline text-blue-600" to="/login">Please Login</Link>
                </p>

                {errorMessage && <p className="text-red-600 font-bold mt-4">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Register;
""
