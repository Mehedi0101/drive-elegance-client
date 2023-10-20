import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Store } from "react-notifications-component";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
    document.title = "Registration";
    
    const { signUpEmailPassword, logoutUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');
    const [alreadyExistError, setAlreadyExistError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { state } = useLocation();
    
    const handleRegister = e => {
        e.preventDefault();
        setPasswordError('');
        setAlreadyExistError(false);

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');


        if (password.length < 6) {
            setPasswordError('password should contain at least 6 characters');
            return;
        }

        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setPasswordError('password should contain at least an uppercase character');
            return;
        }

        if (!/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).+$/.test(password)) {
            setPasswordError('password should contain at least a special character');
            return;
        }

        signUpEmailPassword(email, password)
            .then( () => {
                Store.addNotification({
                    title: "Success",
                    message: "Registered Successfully",
                    type: "success",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                })

                updateProfile(auth.currentUser, { displayName: name, photoURL: '' })
                    .then(() => { })
                    .catch(() => { })

                
                const newUser = { email, cart: [] };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })

                logoutUser();
                navigate('/login');
            })

            .catch(error => {
                error.code === 'auth/email-already-in-use' && setAlreadyExistError(true);
            })
    }

    const handleGoogle = e => {
        e.preventDefault();
        googleLogin()
            .then( result => {
                const newUser = { email: result.user.email, cart: [] };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })

                navigate(state || '/');

                Store.addNotification({
                    title: "Logged in successfully",
                    type: "success",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                })
            })
            .catch(() => { })
    }

    return (
        <div className="mt-20 flex flex-col justify-center items-center">
            <form onSubmit={handleRegister} className="xl:p-14 lg:p-12 md:p-10 p-8 rounded text-sm md:text-base max-w-[90%] mx-auto">
                <h2 className="font-bold text-3xl md:text-4xl mb-10">Register</h2>
                <input className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="name" id="name" placeholder="Name" required />
                <br />
                <input className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="email" name="email" id="email" placeholder="Email" required />
                {
                    alreadyExistError && <p className="text-red-500 text-xs -mt-8 max-w-full w-[400px]">Email is already in use</p>
                }
                <div className="mb-8 relative">
                    <input className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" required />
                    {
                        showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} className="absolute top-[20%] right-2 text-2xl cursor-pointer" /> : <AiOutlineEye onClick={() => setShowPassword(!showPassword)} className="absolute top-[20%] right-2 text-2xl cursor-pointer" />
                    }
                </div>
                {
                    passwordError && <p className="text-red-500 text-xs -mt-8 mb-8 max-w-full w-[400px]">*{passwordError}</p>
                }
                <button className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Register</button>
                <div className="flex justify-center gap-1 text-sm font-medium">
                    <p>Already have an account?</p>
                    <Link className="text-primary underline" to='/login'>Login</Link>
                </div>
                <div className="max-w-[90%] w-[400px] mx-auto">
                    <div className="flex items-center gap-2 my-6">
                        <hr className="border-[1px] border-[#C5C5C5] w-full" />
                        <p className="text-black font-medium">Or</p>
                        <hr className="border-[1px] border-[#C5C5C5] w-full" />
                    </div>
                    <div>
                        <div onClick={handleGoogle} className='px-5 py-2 text-black active:scale-95 transition-transform w-full font-medium mb-3 flex items-center border border-[#C5C5C5] rounded-full cursor-pointer text-center'><FcGoogle className="text-2xl" /><p className="mx-auto">Continue with Google</p></div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Registration;