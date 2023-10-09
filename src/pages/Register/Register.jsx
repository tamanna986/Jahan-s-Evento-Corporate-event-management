import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // const name = e.target.name.value
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // const photo = e.target.photo.value;


        console.log(name, email, password, photo)
        // check conditions for valid password

        if (password.length < 6) {
            setError('password should be atleast 6 characters or long');
            return;
        }
        else if (!/[A-Z]/.test(password)) {

            setError('password should contain atleast one uppercase')
            return;
        }
        else if (!/[!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/.test(password)) {

            setError('password should contain atleast one special Character')
            return;
        }
        setError('');

        createUser(email, password)
            .then(result => {
              
                toast.success("Registration successful!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    closeButton: false,
                });
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log('profile Updated')
                    })
                    .catch((error) => {
                        console.log(error.message)
                    })

            })
            .catch(error => {
                console.error(error)
            })


    }



    return (
        <div>
            <div className="hero  min-h-screen bg-[url('https://i.ibb.co/nw2YhTp/pexels-pixabay-50675.jpg')] ">
                
                <form onClick={handleSubmitLogin}>
                    <div className="hero-content  ">

                        <div className="card flex-shrink-0  max-w-sm  backdrop-blur-sm bg-white/30 w-[900px] mt-20">
                            <div className="card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white text-lg">name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        name="name"

                                        required
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white text-lg">Photo </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Photo Url"
                                        name="photo"

                                        required
                                        className="input input-bordered" />
                                </div>
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
                                    <label className="label mt-2">
                                        <a href="#" className="label-text-alt link link-hover font-bold text-white ">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-2 mb-4">
                                    <button className="btn btn-primary">Register</button>
                                   
                                        
                                 
                                </div>

                                {
                    error && <li className="text-red-900 text-center  ">{error}</li>
                    // <p className="text-red-500 text-xl font-bold">{error}</p>
                }



                            </div>
                        </div>
                    </div>

                    <p className="text-white text-center mb-20">Already have an account? <Link to='/Login'><span className="text-red-800 underline font-bold">Login here</span></Link> </p>

                </form>


            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;