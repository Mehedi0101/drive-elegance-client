import { Link, NavLink, useNavigate } from "react-router-dom";
import logoWhite from "../../assets/DriveElegance-logos_white.png";
import logoBlack from "../../assets/DriveElegance-logos_black.png";
import "./styles/header.css";
import { FiMenu } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Store } from "react-notifications-component";
import defaultUser from "../../assets/default-user.png";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const { currentUser, logoutUser, dark, setDark } = useContext(AuthContext);
    const [showUser, setShowUser] = useState(false);

    const links = <>
        <NavLink onClick={() => setShowMenu(false)} to='/'>Home</NavLink>
        <NavLink onClick={() => setShowMenu(false)} to='/add-product'>Add Product</NavLink>
        <NavLink onClick={() => setShowMenu(false)} to='/cart'>My Cart</NavLink>
    </>;

    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                Store.addNotification({
                    title: "Logged out successfully",
                    type: "info",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: true
                    }
                })
            })
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <>
            {/* large device */}
            <div className={`hidden lg:flex items-center justify-between px-10 ${dark ? 'bg-[#1b1b1b] text-white' : 'bg-white text-dark1'}`}>
                <div>
                    <Link to='/'><img className="w-80 h-20 object-cover cursor-pointer" src={dark ? logoWhite : logoBlack} alt="" /></Link>
                </div>
                <div className="flex items-center gap-16 font-medium">
                    <div className="flex gap-10 text-lg">
                        {
                            links
                        }
                    </div>
                    <div className="flex items-center gap-10">

                        {/* dark-mode-toggle */}
                        <input onChange={() => setDark(!dark)} type="checkbox" className="toggle bg-slate-700 checked:bg-slate-400 checked:border-slate-400 border-2 border-slate-700" />

                        {
                            currentUser
                                ?
                                <div className="flex items-center gap-3 relative">
                                    < div className="rounded font-bold select-none">{currentUser.displayName}</div>
                                    <img onClick={() => { setShowUser(!showUser) }} className="w-12 h-12 object-cover rounded-full cursor-pointer border hover:border-2 border-primary" src={currentUser.photoURL || defaultUser} alt="" />
                                    <div className={`absolute top-[65px] right-0 flex flex-col gap-3 text-white bg-[#000000BB] p-8 rounded z-10 ${!showUser && 'hidden'}`}>
                                        <p onClick={() => { setShowUser(false) }} className="mb-3 flex gap-2"><span className="font-bold">Email: </span>{currentUser.email}</p>
                                        <button onClick={() => { setShowUser(false); handleLogout(); }} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform w-fit ml-auto">Logout</button>
                                    </div>
                                </div>
                                :
                                <button onClick={handleLogin} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Login</button>
                        }
                    </div>
                </div >
            </div >

            {/* medium device */}
            < div className={`hidden md:flex items-center justify-between lg:hidden ${dark ? 'bg-[#1b1b1b] text-white' : 'bg-white text-dark1'} px-10`}>
                <div className="flex items-center">
                    <FiMenu onClick={() => setShowMenu(!showMenu)} className="text-2xl cursor-pointer" />
                    <Link to='/'><img className="w-60 h-14 object-cover cursor-pointer" src={dark ? logoWhite : logoBlack} alt="" /></Link>
                </div>
                <div className={`${showMenu ? 'flex' : 'hidden'} flex-col absolute top-14 bg-[#000000BB] px-8 py-5 rounded space-y-3 z-10 text-white`}>
                    {
                        links
                    }
                </div>
                <div className="flex items-center gap-10">
                    {/* dark-mode-toggle */}
                    <input onChange={() => setDark(!dark)} type="checkbox" className="toggle bg-slate-700 checked:bg-slate-400 checked:border-slate-400 border-2 border-slate-700" />
                    {
                        currentUser
                            ?
                            <div className="flex items-center gap-3">
                                < div className="rounded font-bold">{currentUser.displayName}</div>
                                <img onClick={() => { setShowUser(!showUser) }} className="w-10 h-10 object-cover rounded-full cursor-pointer border hover:border-2 border-primary" src={currentUser.photoURL || defaultUser} alt="" />
                                <div className={`flex absolute top-[55px] right-4 md:right-12 flex-col gap-3 text-white bg-[#000000BB] p-8 rounded z-10 ${!showUser && 'hidden'}`}>
                                    <p onClick={() => { setShowUser(false) }} className="mb-3"><span className="font-bold">Email: </span>{currentUser.email}</p>
                                    <button onClick={() => { setShowUser(false); handleLogout(); }} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform w-fit ml-auto">Logout</button>
                                </div>
                            </div>
                            :
                            <button onClick={handleLogin} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Login</button>
                    }
                </div >
            </div >

            {/* small device */}
            <div className={`flex md:hidden items-center justify-between lg:hidden ${dark ? 'bg-[#1b1b1b] text-white' : 'bg-white text-dark1'} px-5`}>
                <div className="flex items-center">
                    <FiMenu onClick={() => setShowMenu(!showMenu)} className="text-2xl cursor-pointer" />
                    <Link to='/'><img className="w-60 h-16 object-cover cursor-pointer" src={dark ? logoWhite : logoBlack} alt="" /></Link>
                </div>
                <div className={`${showMenu ? 'flex' : 'hidden'} flex-col absolute top-16 bg-[#000000BB] px-8 py-5 rounded space-y-3 z-10 text-white`}>
                    {
                        currentUser && <div className=""><span className="font-bold">Username:</span> {currentUser.displayName}</div>
                    }
                    {links}
                    {
                        currentUser
                            ?
                            <button onClick={() => { setShowMenu(false); handleLogout() }} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Logout</button>
                            :
                            <button onClick={() => { setShowMenu(false); handleLogin() }} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Login</button>
                    }
                    {/* dark-mode-toggle */}
                    <input onChange={() => setDark(!dark)} type="checkbox" className="toggle bg-slate-700 checked:bg-slate-400 checked:border-slate-400 border-2 border-slate-700 mx-auto" />
                </div>
            </div >
        </>
    );
};

export default Header;