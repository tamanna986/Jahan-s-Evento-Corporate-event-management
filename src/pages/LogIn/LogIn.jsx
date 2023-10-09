
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const LogIn = () => {
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const { signIn, signInWithGoogle } = useContext(AuthContext)


    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password)

        if (!email) {
            setError('Enter your email please')
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setError('please write a valid email')
            return;
        }
        setError('');

        signIn(email, password)
            .then(result => {
                console.log(result.user)



                toast.success("Log in successful!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    closeButton: false,

                });

                // to go to desired page using navigate
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
            })


    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast.success("Registration successful!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    closeButton: false,
                });
                // to go to desired page using navigate
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className="hero  min-h-screen bg-[url('https://i.ibb.co/nw2YhTp/pexels-pixabay-50675.jpg')]">
                <form onClick={handleLoginSubmit}>
                    <div className="hero-content ">

                        <div className="card flex-shrink-0  max-w-sm  backdrop-blur-sm bg-white/30 w-[900px]">
                            <div className="card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white text-lg">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        name="email"

                                        required
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-white text-lg">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                                    {
                                        error && <li className="text-red-600 mt-1 text-center  ">{error}</li>

                                    }
                                    <label className="label mt-2">
                                        <a href="#" className="label-text-alt link link-hover font-bold text-white ">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-2 mb-4">
                                    <button className="btn btn-primary">Sign In</button>
                                </div>

                                <div className="flex gap-6 items-center justify-center ml-7">
                                    <h3 className="text-white">Or Sign In with</h3>
                                    <button onClick={handleGoogleSignIn} className="w-20 rounded-full"><img className="w-10 rounded-full" src="https://i.ibb.co/njZzjPg/search.png" alt="" /></button>

                                </div>


                            </div>
                        </div>
                    </div>

                    <p className="text-white text-center">Do not have an account? <Link to='/Register'><span className="text-red-900 font-bold underline">Register here</span></Link></p>
                </form>


            </div>
            <ToastContainer />
        </div>
    );
};

export default LogIn;